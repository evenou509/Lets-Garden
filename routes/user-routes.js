const router = require("express").Router();
const userController = require("../controllers/userController");

// route to sign up new user
router.route("/signup")
  .post(userController.create);

//   // route to sign up new user
router.route("/profile")
.post(userController.findUser);

router.route("/signin")
.post(userController.findAll)
//   .get(userController.findById)
  .put(userController.update);

module.exports = router;