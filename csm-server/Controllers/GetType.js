import { ComplaintTypeModel } from "../Schema/ComplaintTypeSchema.js";

export const GetComplaintType = (req, res) => {

    ComplaintTypeModel.find().then((data) => {
        res.send({
            status: 200,
            message: "Complaint types found",
            data: data,
        });
    }).catch((err) => {
        res.send(err);
    })
};
