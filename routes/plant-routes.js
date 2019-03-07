var db = require("../models");

module.exports = function(app) {

    app.post("/api/plants", function(req, res) {
        db.Plant.create(req.body).then(function(dbPlants) {
          res.json(dbPlants);
        });
      });

      app.get("/api/plants", function(req, res) {
        db.Plant.findAll({
          where: 
            UserId = req.query.id,
          include: [db.User]
        }).then(function(dbPlant) {
          res.json(dbPlant);
        });
      });

      app.delete("/api/plants/:id", function(req, res) {
        // We just have to specify which todo we want to destroy with "where"
        db.Plant.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbPlant) {
          res.json(dbPlant);
        });
    
      });
    

//   app.get("/api/plants", function(req, res){
//     db.Plants.findAll({
//     }).then(function(dbUser){
//       res.json(dbUser)
//     });
//   });

//   app.get("/api/users/:email", function (req, res) {
//     db.User.findOne({
//         where: {
//             email: req.params.email
//         }
//     }).then(function (dbUser) {
//         res.json(dbUser);
//     });
// });

//   app.get("/api/users/:id", function(req, res) {
//     db.User.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Plant]
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });


  // app.get("/api/users/:id", function(req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Plant]
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });




//   app.put("/api/users", function(req, res) {
//     db.User.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });
}
