const Entity = require("../context/entity");


class TimezonesEntity extends Entity{
    constructor(){
        super("timezones","timezone_id");
        this.getByCityId
    }
}

module.exports = TimezonesEntity;
