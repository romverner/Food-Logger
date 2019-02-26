var express = require("express");
var router  = express.Router();
var burger  = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll( (data) => {
        var bObject = {
            burgers: data
        };
        console.log(bObject);
        res.render("index", bObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        req.body.burger]
        , (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var devoured = "id = " + req.params.id;

    console.log("devoured", devoured);

    burger.updateOne({
        devoured: req.body.devoured
    }, devoured, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        };
    });
});

module.exports = router;