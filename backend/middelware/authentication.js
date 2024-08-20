import jwt from "jsonwebtoken";

export let Isauthentication = async (req, res, next) => {
  try {
    let { uid } = req.cookies;

    if (!uid) {
      return res.status(400).json({
        massage: "you are not authenticate",
        success: false,
      });
    }

    let decode = jwt.verify(uid, process.env.JWT_SECRET);

    req.userId = decode.userId;
    next();
   
  } catch (error) {
    console.log(error);
  }
};
