import express from "express";
import { Postuser } from "../Controllers/PostUser.js";
import { Getuser } from "../Controllers/GetUser.js";
import { Complaints } from "../Controllers/Postcomplaint.js";
import { Getcomplaint } from "../Controllers/GetComplaint.js";

const Route = express.Router();

Route.post("/post", Postuser);
Route.get("/getuser", Getuser);
Route.post("/postcomplaint", Complaints);
Route.get("/getcomplaint", Getcomplaint);

export default Route;
