var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    };

    return arr.toString();
};

function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        var value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
        };
        arr.push(key + "=" + value);
    };

    return arr.toString();
};

var orm = {
    selectAll: function(table, cb) {
        var queryStr = "SELECT * FROM ?";
        connection.query(queryStr, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryStr = "INSERT INTO " + table;
        
        queryStr += " (";
        queryStr += cols.toString();
        queryStr += ") ";
        queryStr += "VALUES (";
        queryStr += printQuestionMarks(vals.length);
        queryStr += ") ";

        console.log(queryStr);

        connection.query(queryStr, vals, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryStr = "UPDATE " + table;

        queryStr += " SET ";
        queryStr += objToSql(objColVals);
        queryStr += " WHERE ";
        queryStr += condition;

        console.log(queryStr);

        connection.query(queryStr, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    }
};

module.exports = orm;