var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (val, cb) => {
        orm.insertOne("burgers", val, (res) => {
            cb(res);
        });
    },
    updateOne: (idVal, cb) => {
        orm.updateOne("burgers", [bool, idVal], (res) => {
            cb(res);
        });
    }
};

module.exports = burger;