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
        db.Plant.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbPlant) {
          res.json(dbPlant);
        });
    
      });

      app.put("/api/plants/:id", function(req, res) {
        db.Plant.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbPlant) {
          res.json(dbPlant);
        });
      });
}
