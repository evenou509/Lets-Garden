const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    const { email, password } = req.body
    console.log(email, password)
    db.User
      .findOne({
        where: {
          email,
          password,
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function(req, res) {
    const  email = req.body.email
    console.log("this is find user")
    console.log(email)
    db.User
      .findOne( req.params.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res, next) {
    // console.log("in create");
    // passport.authenticate('signup', (err, user, info)=>{
    //   console.log("in auth", err);
    //   if(err) { return next(err)}
    //   if(!user) { return res.json({user : false})}
    //   req.logIn(user, function(err) {
    //       if (err) { return next(err); }
    //       console.log('logged');
    //       return res.json({user : true});
    //     });
    // })(req, res, next)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
