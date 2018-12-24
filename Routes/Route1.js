const SampleController = require("../Controllers/SampleController")

module.exports = app => {
    app.get("/load",SampleController.load)
    
}