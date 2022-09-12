const express = require("express");
const cors = require("cors");
const app=express();
const bodyParser = require("body-parser");
const db=require("./db");
const PORT=5000;
const router=require("./routes/index");

//database connection
db.connect();

app.use(cors());
app.use(express.json());

app.use("/api",router);//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
  });

//middleware

//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
  });
//middle ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));




app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port no ${PORT}`);
  });