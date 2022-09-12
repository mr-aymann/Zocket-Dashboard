const mongoose = require("mongoose");
const password = "AymanAddu";

const url =
`mongodb://connectAdmin:${password}@ac-0olvfj3-shard-00-00.xylmps9.mongodb.net:27017,ac-0olvfj3-shard-00-01.xylmps9.mongodb.net:27017,ac-0olvfj3-shard-00-02.xylmps9.mongodb.net:27017/?ssl=true&replicaSet=atlas-b13tjx-shard-0&authSource=admin&retryWrites=true&w=majority`


module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log(err);   
    });
    };
