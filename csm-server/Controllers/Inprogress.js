import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const Inprogress = (req, res) => {

    ComplaintModel.find({Viewed : true , Inprogress : false }).populate('User')
        .then((data) => {
            res.send({
                status: 200,
                message: "Complaints found",
                data: data,
            });
        }).catch((err) => {
            res.send(err);
        })
};
