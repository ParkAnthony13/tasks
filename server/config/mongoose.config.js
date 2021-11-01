
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/travelLogDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("CONNECTED TO DB"))
.catch(err => console.log("Error: ",err))