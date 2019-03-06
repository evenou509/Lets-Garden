
const router = require("express").Router();
const userRoutes = require("./user-routes");
const plantRoutes = require("./plant-routes");
var path = require("path");

// // Book routes
// router.use("/users", userRoutes);

// router.use("/plant", plantRoutes);

// module.exports = router;


module.exports = function(app) {

    app.get("/", function(req, res){
       res.sendFile(path.join(__dirname, "../public/index.html")); 
    })

    app.get("/signup", function(req, res){
       res.sendFile(path.join(__dirname, "../public/signup.html")); 
    })

    app.get("/profile/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/profile.html")); 
     })

   //   app.get("/profile/" + email, function(req, res){
   //    res.sendFile(path.join(__dirname, "../public/profile.html")); 
   // })

    app.get("/contact", function(req, res){
        res.sendFile(path.join(__dirname, "../public/contact.html")); 
     })

     app.get("/search", function(req, res){
        res.sendFile(path.join(__dirname, "../public/search.html")); 
     })
}