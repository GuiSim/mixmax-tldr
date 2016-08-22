var unirest = require('unirest');

module.exports = function(apiKey) {
    var module = {
        apiKey: apiKey
    };

    module.summarize = function(text, callback) {
        if (/^http[s]?:\/\//.test(text)) {
            sendUrlToSmmry(text, callback);
        } else {
            sendTextToSmmry(text, callback);
        }
    }

    sendTextToSmmry = function(text, callback) {
        createSmmryRequest().send({
            sm_api_input: text
        }).end(handleSmmryResponse(callback));
    }

    sendUrlToSmmry = function(url, callback) {
        createSmmryRequest().query({
            SM_URL: url
        }).end(handleSmmryResponse(callback));
    }

    createSmmryRequest = function() {
        return unirest.post('http://api.smmry.com/').query({
            SM_API_KEY: apiKey,
            SM_LENGTH: 3,
            SM_WITH_BREAK: true
        }).headers({
            Expect: ''
        })
    }

    handleSmmryResponse = function(callback) {
        return function(res) {
            if (res.body.sm_api_limitation) {
                console.log('Smmry info: %s', res.body.sm_api_limitation);
            }

            var title;
            var body;
            if (res.body.sm_api_error) {
                title = '';
                body = res.body.sm_api_message;
            } else {
                title = res.body.sm_api_title;
                body = res.body.sm_api_content.replace(/\[BREAK\]/g, '\n');
            }

            callback({
                title: title,
                body: body
            });
        }
    }

    return module;
}