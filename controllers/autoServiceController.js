const AutoService = require("../models/autoServiceModel")
const APIFeatures = require('./../utils/apiTools')

//getAllAutoService////////////////////////////////////////
exports.getAllAutoServices= async (req, res)=>{
    try{
        const autoServicesData = new APIFeatures(AutoService.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()
        const autoServices = await autoServicesData.query;
        res.status(200).json({
            status: "success",
            results: autoServices.length,
            data: {autoServices}
        })
    }catch(err){
        res.status(404).json({
            status: "failed",
            message: err.message
        })
    }
}
//createAutoService////////////////////////////////////////
exports.createAutoService = async (req, res) =>{
    try{
        const newAutoService = await AutoService.create(req.body)
        res.status(201).json({
            status: "success",
            message: "New autoService is created",
            data: {newAutoService}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}
//updateAutoService////////////////////////////////////////
exports.updatAutoService= async (req, res) =>{
    try{
        const autoService = await AutoService.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            message: "AutoService is updated",
            data: {autoService}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}
//updateAutoService////////////////////////////////////////
exports.updatAutoService= async (req, res) =>{
    try{
        const autoService = await AutoService.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            message: "AutoService is updated",
            data: {autoService}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}
//deleteAutoService////////////////////////////////////////
exports.deleteAutoService = async (req, res) =>{
    try{
        await AutoService.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "AutoService is deleted",
            data: null
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}