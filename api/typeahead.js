module.exports = function(req, res) {
    var text = req.query.text ? req.query.text : '';
    res.json([{
        title: '<i>' + text.substr(0, 50) + '</i>',
        text: text
    }]);
};