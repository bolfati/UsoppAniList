const router = require("express").Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
    try {
      const newUser = new User();
      newUser.username = req.body.username;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
  
      const userData = await newUser.save();
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  });

  module.exports = router;