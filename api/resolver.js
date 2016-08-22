var apiKey = process.env.SM_API_KEY
console.log("Starting resolver with API Key %s", apiKey);

var smmry = require('../smmry/smmry.js')(apiKey)

module.exports = function(req, res) {
    var text = req.query.text ? req.query.text.trim() : '';

    smmry.summarize(text, function(summary) {
        res.json({
            subject: summary.title,
            body: '<b>Summary of </b><a href="' + text + '">' + text + '</a><p>' + summary.body.replace(/\n/g, '<br/>') + '</p>'
        })
    });
};