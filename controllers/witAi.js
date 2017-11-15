var Wit = require('../middleware').wit;
let wit = new Wit();
exports.message = (req, res) => {
    let message = req.body.message;
    wit.sent(message, (rs) => {
        res.send(rs.entities.intent)
    });
}