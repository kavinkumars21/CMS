import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const Complaints = async (req, res) => {
    const complaint = new ComplaintModel({
        Type: req.body.Type,
        Description: req.body.Description,
        User: req.body.User,
        Viewed: req.body.Viewed,
        Inprogress: req.body.Inprogress,
        Completed: req.body.Completed
    });
    complaint.save().then(() => {
        res.send({
            status: 200,
            message: "Complaint is added",
        });
    }).catch((err) => {
        res.send(err);
    })
};
