import { ComplaintModel } from "../Schema/ComplaintSchema.js";
import fs from "fs";

export const Complaints = async (req, res) => {
    const complaint = new ComplaintModel({
        Type: req.body.Type,
        Description: req.body.Description,
        User: req.body.User,
        Viewed: req.body.Viewed,
        Inprogress: req.body.Inprogress,
        Completed: req.body.Completed,
        RaisedOn: req.body.RaisedOn,
        ...req.file && {
        Image: {
            data: fs.readFileSync("Image/" + req.file.filename),
            contentType: "image/png",
        }},
    });
    complaint.save().then(() => {
        res.send({
            status: 200,
            message: "Complaint is added",
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
