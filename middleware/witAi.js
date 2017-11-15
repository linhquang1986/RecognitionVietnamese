var { Wit } = require('node-wit');
module.exports = class {
    constructor() {
        this.client = new Wit({
            accessToken: 'LL3HW5N2Z5N2C46OAV7SC4PONCFDXUNF'
        })
    }
    sent(message, callback) {
        this.client.message(message, {})
            .then((data) => {
                callback(data);
            });
    }
}