import express from "express";
import multer from "multer";

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

const Route = express.Router();

const ComplaintImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Image");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const Upload = multer({
    storage: ComplaintImage,
    limits: {
        fileSize: 90000000,
    },
});

Route.post("/postuser", Postuser);
Route.get("/getuser", Getuser);
Route.post("/postcomplaint",Upload.single("image"), Complaints);
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

export default Route;
