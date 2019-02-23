var connection = require("../config/connection.js");

var orm = {
    selectAll: function() {
        var queryStr = "";
        connection.query(queryStr, [], (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function() {
        var queryStr = "";
        connection.query(queryStr, [], (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function() {
        var queryStr = "";
        connection.query(queryStr, [], (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    }
};

module.exports = orm;