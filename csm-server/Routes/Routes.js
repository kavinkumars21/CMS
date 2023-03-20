import express from "express";
import { Postuser } from "../Controllers/PostUser.js";
import { Getuser } from "../Controllers/GetUser.js";
import { Complaints } from "../Controllers/Postcomplaint.js";
import { Getcomplaint } from "../Controllers/GetComplaint.js";
import { complaintType } from "../Controllers/PostType.js";
import { GetComplaintType } from "../Controllers/GetType.js";

const Route = express.Router();

Route.post("/post", Postuser);
Route.get("/getuser", Getuser);
Route.post("/postcomplaint", Complaints);
Route.get("/getcomplaint", Getcomplaint);
Route.post("/posttype", complaintType);
Route.get("/gettype", GetComplaintType);

export default Route;
