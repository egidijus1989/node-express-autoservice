const mongoose = require("mongoose");
const AutoWorker = require("./autoWorkerModel")

const autoServiceSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "autoservice must have a name"],
        unique: true
    },
    address:{
        type: String,
        required: [true, "must have an address"],
    },
    bossman:{
        type: String,
        required:[true, "must have an bossman"],
    },
    // worker:[
    //     {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Autoworker"
    //     }
    // ],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
      },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  })

const AutoService = mongoose.model("AutoService", autoServiceSchema)

module.exports = AutoService