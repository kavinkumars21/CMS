import { ComplaintModel } from "../Schema/ComplaintSchema.js";
import fs from "fs";
import cloudinary from "../cloudinary.js";

export const Complaints = async (req, res) => {
    const file = req.files.Image;
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "ComplaintImage"    
        })
        const complaint = new ComplaintModel({
            Type: req.body.Type,
            Description: req.body.Description,
            User: req.body.User,
            Viewed: req.body.Viewed,
            Inprogress: req.body.Inprogress,
            Completed: req.body.Completed,
            RaisedOn: req.body.RaisedOn,
            Image: {
                public_id: result.public_id,
                url: result.secure_url
            },
        });
        complaint.save().then(() => {
            res.send({
                status: 200,
                message: "Complaint is added",
            });
        }).catch((err) => {
            res.send(err);
        })
    } catch (error) {
        console.log(error);
    }
};
