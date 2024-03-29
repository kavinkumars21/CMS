import { AdminModel } from "../Schema/AdminSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';

export const AdminLogin = async (req, res) => {
  const cookies = new Cookies();
  const data = await AdminModel.findOne({ Name: req.body.Name });

  if (data) {
    const validatePassword = await bcrypt.compare(req.body.Password, data.Password);
    if (validatePassword) {
      const token = await tokenGeneratore("admin");
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 300000),
        secure: true,
        // httpOnly: true,
        // sameSite: 'none',
        path: '/',
        // domain: '.vercel.app'
      });
      res.send({
        status: 200,
        message: "Password Correct",
        response: "success",
      });
    } else {
      return res.send({
        status: 404,
        message: "Incorrect password",
        response: "Incorrect password",
      });
    }
  } else {
    return res.send({
      status: 404,
      message: "User not found",
      response: "User not found",
    });
  }
};

export const tokenGeneratore = (User) => {
  const token = jwt.sign(
    { User },
    process.env.JWT_KEY,
    { expiresIn: "5m" }
  )
  return token;
}

export const tokenValidator = async (token) => {
  const data = await jwt.verify(token, process.env.JWT_KEY);
  return data;
}

export const AdminVerify = async (req, res, next) => {
  try {
    const { jwt } = req.cookies;
    const valid = await tokenValidator(jwt);
    if (valid) {
      next();
    } else {
      res.send("Access Denied");
    }
  } catch (error) {
    console.log(error);
    res.send({ message: "Access Denied", error });
  }
}
