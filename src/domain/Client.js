const USID = require("usid");
const usid = new USID();

class Client {
    constructor({name = '', lastName = '', age = '', birthday = ''}) {
        this.id = usid.uuid();
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.birthday = birthday;
    }
}

module.exports = Client;
