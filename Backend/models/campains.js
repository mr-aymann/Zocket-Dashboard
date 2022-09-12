const moongose=require('mongoose');

const CampaignSchema = new moongose.Schema({
    product:String,
    createdAt :{
        type:Date,
        default:Date.now(),
    },
    campaingEnd:{
        type:Date,
        default:Date.now(),
    },
    img:String,
    clicks:Number,
    budget:Number,
    Location:String,
    platform:String,
    status:String,
});

module.exports = moongose.model("compaign", CampaignSchema);