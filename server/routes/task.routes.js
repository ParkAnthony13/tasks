const taskController = require("../controllers/task.controller")

module.exports = app => {
    app.get("/api/test",taskController.test)
    app.get("/api/task",taskController.getAll)
    app.post("/api/task",taskController.createOne)
    app.get("/api/task/:id",taskController.getOne)
    app.put("/api/task/:id",taskController.updateOne)
    app.delete("/api/task/:id",taskController.deleteOne)
}