const mongoose = require("mongoose");
const AutoService = require("./autoServiceModel")


const autoWorkerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "An autoWorker must have a name"],
    },
    lastname:{
        type: String,
        required: [true, "An autoWorker must have a lastename"],
    },
    speciality:{
        type: String,
        required: [true, "An autoWorker must have a speciality"],
    },
    photo:{
        type: String,
        required: [true, "An autoWorker must have a photo"],
    },
    city:{
        type: String,
        required: [true, "An autoWorker must have a city"],
    },
    autoService:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "AutoService"
        }
    ],
    wouldRecomend:{
        type:Boolean,
        default:false
    },
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

autoWorkerSchema.pre(/^find/, function (next) {
    this.populate({
      path: "autoService",
      select: "name",
    });
    next();
})

const AutoWorker = mongoose.model("AutoWorker", autoWorkerSchema);

module.exports = AutoWorker;