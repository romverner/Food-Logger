var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (col, val, cb) => {
        orm.insertOne("burgers", col, val, (res) => {
            cb(res);
        });
    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;