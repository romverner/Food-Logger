var express = require("express");
var router  = express.Router();
var burger  = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll( (data) => {
        var berObject = {
            burgers: data
        };
        console.log(berObject);
        res.render("index", berObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var dev = "id = " + req.params.id;

    console.log("devoured", devoured);

    burger.updateOne({
        devoured: req.body.devoured
    }, dev, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        };
    });
});

module.exports = router;