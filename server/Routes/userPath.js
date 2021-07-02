const express = require("express");
const router = express.Router();
const user = require("../models/userSchema");

//endpoint for registration....
router.post("/api/signup", async (req, res) => {
  try {
    //storing data sent from client...
    const { firstName, lastName, email, password } = req.body;

    console.log(req.body);

    //checking if any of the filed is empty...
    if (!firstName || !lastName || !email || !password) {
      return res.status(422).send({ meesage: "Fill the fields properly" });
    }

    //checking if email is already exist or not...
    const isEmailAlreadyExists = await user.findOne({ email: email });

    if (isEmailAlreadyExists) {
      return res.status(422).send({ message: "Email already exists!" });
    }

    //if email is not existed before creating new account for that user...
    const newUser = new user({ firstName, lastName, email, password });

    const registerUser = await newUser.save();

    if (registerUser) {
      console.log({ firstName, lastName, email, password });

      //on successful registration sending positive response to client....
      return res.status(201).send({ message: "Registration Successfull" });
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
  console.log("signup");
});

//login route...............
router.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Please filled the data" });
    }

    const loginSuccess = await user.findOne({ email: email });

    if (loginSuccess) {
      const passwordMatch = await user.findOne({ password: password });

      if (passwordMatch) {
        res.status(201).send({ message: "Login Successful" });
      } else {
        res.status(400).send({ message: "invalid password" });
      }
    } else {
      res.status(400).send({ message: "invalid email" });
    }
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
