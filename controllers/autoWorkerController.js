const AutoWorker = require("../models/autoWorkerModel")
const APIFeatures = require('./../utils/apiTools')

//getAllAutoWorkers////////////////////////////////////////
exports.getAllAutoWorkers= async (req, res)=>{
    try{
        const autoWorkersData = new APIFeatures(AutoWorker.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()
        const autoWorkers = await autoWorkersData.query;
        res.status(200).json({
            status: "success",
            results: autoWorkers.length,
            data: {autoWorkers}
        })
    }catch(err){
        res.status(404).json({
            status: "failed",
            message: err.message
        })
    }
}
//createAutoWorkers////////////////////////////////////////
exports.createAutoWorker= async (req, res) =>{
    try{
        const newAutoWorker = await AutoWorker.create(req.body)
        res.status(201).json({
            status: "success",
            message: "New AutoWorker is created",
            data: {newAutoWorker}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}
//updateAutoWorker////////////////////////////////////////
exports.updatAutoWorker = async (req, res) =>{
    try{
        const autoWorker = await AutoWorker.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            message: "AutoWorker is updated",
            data: {autoWorker}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err.message
        })
    }
}
//updateAutoWorkerLike////////////////////////////////////////
exports.updatAutoWorkerLike = async (req, res) =>{
    try{
        const autoWorker = await AutoWorker.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            message: "AutoWorker is updated",
            data: {autoWorker}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err.message
        })
    }
}
//deleteAutoService////////////////////////////////////////
exports.deleteAutoWorker = async (req, res) =>{
    try{
        await AutoWorker.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "AutoWorker is deleted",
            data: null
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}