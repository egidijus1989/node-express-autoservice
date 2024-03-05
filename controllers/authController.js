const { promisify } = require("util");
const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const { error } = require("console");

const signToken = (id) => {
    return jwt.sign({id: id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signup = async (req, res) => {
    try {
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
      });
  
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
  
      res.status(201).json({
        status: "Success",
        data: { newUser, token },
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Please provide email and password");
      }
      const user = await User.findOne({ email }).select("+password");
      if (!user || !(await user.correctPassword(password, user.password))) {
        throw new Error("Incorrect email or password");
      }
      const token = signToken(user.id);
      res.status(200).json({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  };

  exports.logout = async (req, res) => {
    try{
      await User.findOneAndUpdate({_id: req.user._id}, {accessToken: ""})
      console.log(req.user._id)
      res.status(200).json({
        status: "Success",
      })
    }catch(err){
        res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  }

  exports.protect = async (req, res, next) => {

    let token;
    try {
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }
      if (!token) {
        throw new Error("User not authenticated");
      }

      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
      console.log("decoded", decoded);

      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        throw new Error("user no exist");
      }
 
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        throw new Error("User changed password");
      }

      req.user = currentUser;
      next();
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  };

  exports.restrictTo = (...roles) => {
    return (req, res, next) => {
      if(!roles.includes(req.user.role)){
        return next(res.status(403).json({
          status: "Fail",
          message: "Your are not authorized to access ths data"
        }))
      }
      next()
    }
  }