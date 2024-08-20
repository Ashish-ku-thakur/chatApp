import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
export let Register = async (req, res) => {
  try {
    let { fullname, email, password, gender } = req.body;

    // basic validation
    if (!fullname || !email || !password || !gender) {
      return res.status(404).json({
        success: false,
        massage: "All fields are required",
      });
    }

    // if all get
    let check = await User.findOne({ email });

    // if find
    if (check) {
      return res.status(404).json({
        success: false,
        massage: "this email id is already exist try another email ID",
      });
    }

    // if not find then create

    // password hash
    let hashPassword = await bcrypt.hash(password, 10);

    // profilePhoto
    let mailProfile = `https://avatar.iran.liara.run/public/boy?firstname=${fullname}`;
    let femailProfile = `https://avatar.iran.liara.run/public/girl?firstname=${fullname}`;

    let profilePhoto;

    let accountCreate = await User.create({
      fullname,
      email,
      password: hashPassword,
      gender,
      profilePhoto: gender == "mail" ? mailProfile : femailProfile,
    });

    return res.status(201).json({
      fullname,
      email,
      gender,
      photo: accountCreate.profilePhoto,

      success: true,
      massage: "Account created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// Login
export let Login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        massage: "All fields are required",
      });
    }

    // check is present or not
    let checkUser = await User.findOne({ email });

    // if not present
    if (!checkUser) {
      return res.status(404).json({
        success: false,
        massage: "email & password is not match",
      });
    }

    // if email is write then check password
    let checkPassword = bcrypt.compare(password, checkUser.password);

    if (!checkPassword) {
      return res.status(404).json({
        success: false,
        massage: "email & password is not match",
      });
    }

    // if email & password is write
    let token = await jwt.sign(
      { userId: checkUser._id },
      process.env.JWT_SECRET,
      {expiresIn:"1d"}
    );

    return res.status(200).cookie("uid", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, }).json({
        success: true,
        massage: `welcome back ${checkUser.fullname}`,
        checkUser,
      });
  } catch (error) {
    console.log(error);
  }
};

// Logout
export let logout = (req, res) => {
  try {

    return res
      .status(200)
      .cookie("uid", "", {
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .json({
        massage: "logout user successfully",
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

// GetotherUsers
export let GetotherUsers = async (req, res) => {
  try {
    let loggedinuserId = req.userId;

    // basic validation
    if (!loggedinuserId) {
      return res.status(404).json({
        success: false,
        massage: "loggedinuser is not defined",
      });
    }

    let getotherUsers = await User.find({_id: {
      $ne: { _id: loggedinuserId },
    }});
    return res.status(200).json({
      getotherUsers,
    });
  } catch (error) {
    console.log(error);
  }
};


