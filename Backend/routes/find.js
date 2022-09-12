const express = require("express");
const router = express.Router();

const campainDB = require("./../models/campains");

//Find with filter
router.get("/", async (req, res) => {
    console.log(req.body);
    const{platform,status,date}=req.body;
    try {
        await campainDB.find({platform:platform,status:status,createdAt:date}).then((data) => {
            res.status(200).send({
                status: true,
                data: data,
            });
        }).catch((err) => {
            res.status(400).send({
                status: false,
                message: "Bad request",
            });
        });
    } 
    catch (e) {
        res.status(500).send({
          status: false,
          message: "Error while adding question",
        });
      }
});

module.exports = router;
    