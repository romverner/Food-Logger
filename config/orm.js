var connection = require("../config/connection.js");

var orm = {
    selectAll: (table, cb) => {
        var queryStr = "SELECT * FROM ? ;";
        connection.query(queryStr, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: (table, val, cb)=> {
        var queryStr = "INSERT INTO " + table + " (burger) VALUES (?);";

        connection.query(queryStr, [val], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: (table, bool, idVal, cb) => {
        var queryStr = "UPDATE " + table;

        queryStr += " SET devoured = ? ";
        queryStr += " WHERE id = ? '";

        console.log(queryStr);

        connection.query(queryStr, [bool, idVal], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    }
};

module.exports = orm;