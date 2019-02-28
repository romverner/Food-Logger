var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

var orm = {
    selectAll: (table, cb) => {
        var queryStr = "SELECT * FROM " + table + ";";
        connection.query(queryStr, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: (table, cols, val, cb)=> {
        var queryStr = "INSERT INTO " + table;

        queryStr += " (";
        queryStr += cols.toString();
        queryStr += ") ";
        queryStr += "VALUES (";
        queryStr += printQuestionMarks(val.length);
        queryStr += ") ";

        connection.query(queryStr, val, (err, result) => {
            if (err) throw err;
            console.log(result);

            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
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