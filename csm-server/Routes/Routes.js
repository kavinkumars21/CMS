import express from "express";

import { Postuser } from "../Controllers/PostUser.js";
import { Getuser } from "../Controllers/GetUser.js";
import { Complaints } from "../Controllers/PostComplaint.js";
import { Getcomplaint } from "../Controllers/GetComplaint.js";
import { complaintType } from "../Controllers/PostType.js";
import { GetComplaintType } from "../Controllers/GetType.js";
import { Login } from "../Controllers/Login.js";
import { ComplaintHistory } from "../Controllers/ComplaintHistory.js";
import { NotViewed } from "../Controllers/NotViewed.js";
import { Inprogress } from "../Controllers/Inprogress.js";
import { UpdateViewed } from "../Controllers/UpdateViewed.js";
import { UpdateInprogress } from "../Controllers/UpdateInprogress.js";
import { SolvedComplaints } from "../Controllers/SolvedComplaints.js";
import { postSolver } from "../Controllers/PostSolvers.js";
import { GetSolvers } from "../Controllers/Solvers.js";
import { GetCategoryBasedSolvers } from "../Controllers/GetCatBasedSolvers.js";

const Route = express.Router();

Route.post("/postuser", Postuser);
Route.get("/getuser", Getuser);
Route.post("/postcomplaint", Complaints);
Route.get("/getcomplaint", Getcomplaint);
Route.post("/posttype", complaintType);
Route.get("/gettype", GetComplaintType);
Route.post("/login", Login);
Route.post("/complaints", ComplaintHistory);
Route.get("/notviewed", NotViewed);
Route.get("/inprogress", Inprogress);
Route.put("/updateview" , UpdateViewed);
Route.put("/updateinprogress", UpdateInprogress);
Route.get("/solved", SolvedComplaints);
Route.post("/postsolver", postSolver);
Route.get("/solvers", GetSolvers);
Route.post("/getsolvers", GetCategoryBasedSolvers);

export default Route;
