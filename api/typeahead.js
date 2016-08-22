module.exports = function(req, res) {
    res.json([{
        title: '<i>' + req.query.text.substr(0, 25) + '</i>',
        text: req.query.text
    }]);
};