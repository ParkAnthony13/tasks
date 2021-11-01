const task = require('../models/task.model') // task
// made const name same as name in model

module.exports.test = (req, res) => {
    res.json({
        message: "TEST MESSAGE FOR TASKM"
    })
}

module.exports.getAll = (req, res) => {
    Task.find()
        .then(allTasks => res.json({ allTasks }))
        .catch(err => res.json({ err }))
}

module.exports.createOne = (req, res) => {
    Task.create(req.body)
        .then(newTask => res.json({ newTask }))
        .catch(err => {
            res.status(400).json(err)
            console.log(err)
        })
}

module.exports.getOne = (req, res) => {
    Task.findOne({_id:req.params.id})
        .then(oneLog => res.json({Log:oneLog}))
        .catch(err => res.json({err}))
}

module.exports.updateOne = (req,res) => {
    Task.findOneAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
        .then(updated => res.json({Task: updated}))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOne = (req,res) => {
    Task.deleteOne({_id:req.params.id})
        .then(deleted => res.json(deleted))
        .catch(err => response.json(err))
}