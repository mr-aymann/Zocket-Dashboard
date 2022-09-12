const express = require("express");
const router = express.Router();

const campainDB = require("./../models/campains");

//CREATE

router.post("/", async (req, res) => {
    console.log(req.body);
    const { product, campaingEnd,clicks, budget, Location, platform, status,img } = req.body;

    try{
        await campainDB.create({
            product,
            campaingEnd,
            img,  
            clicks,
            budget,
            Location,
            platform,
            status     
        }).then(() => {
            res.status(201).send({
                message: "Campaign created successfully",
                status:true,
            });
        }).catch((err) => {
            res.status(400).send({
                staus: false,
                message: "Bad request",
            });
        });
    } catch (e) {
        res.status(500).send({
          status: false,
          message: "Error while adding question",
        });
      }
});

//READ
router.get("/", async (req, res) => {
    try {
        await campainDB.find().then((data) => {
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