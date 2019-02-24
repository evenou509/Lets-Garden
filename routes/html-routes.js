
const router = require("express").Router();
const userRoutes = require("./user-routes");
const plantRoutes = require("./plant-routes");


// Book routes
router.use("/users", userRoutes);

router.use("/plant", plantRoutes);

module.exports = router;
// var path = require("path");

// module.exports = function(app) {

//     // app.get("/", function(req, res){
//     //    res.sendFile(path.join(__dirname, "../public/index.html")); 
//     // })

//     // app.get("/signup", function(req, res){
//     //    res.sendFile(path.join(__dirname, "../public/signup.html")); 
//     // })

//     // app.get("/profile", function(req, res){
//     //     res.sendFile(path.join(__dirname, "../public/profile.html")); 
//     //  })

//     // app.get("/patientview/:id", function(req, res){
//     //     res.sendFile(path.join(__dirname, "../public/patient_view.html")); 
//     //  })
// }