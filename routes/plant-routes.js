const router = require("express").Router();
const plantController = require("../controllers/plantController");


router.route("/addplant")
  .post(plantController.create);

  router.route("/all")
  .post(plantController.findAll);


module.exports = router;