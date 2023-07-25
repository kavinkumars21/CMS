import { AdminModel } from "../Schema/AdminSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';

export const Validate = async (req, res) => {
  const cookies = new Cookies();
  const Password = req.body.Password;
  const data = await AdminModel.findOne({ User: "admin" });

  if (data) {
    const validatePassword = await bcrypt.compare(Password, data.Password);
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
        message: "Incorrect",
        response: "Incorrect",
      });
    }
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

export const verify = async (req, res, next) => {
  try {
    const { jwt } = req.cookies;
    const valid = await tokenValidator(jwt);
    if (valid) {
      next();
    } else {
      res.send("Access Denied");
    }
  } catch (error) {
    res.send({ message: "Access Denied", error });
  }
}
