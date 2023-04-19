import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const UpdateViewed = (req, res) => {

    ComplaintModel.findOneAndUpdate({ _id : req.body.id },{Viewed : true},{upsert: true})
        .then((data) => {
            res.send({
                status: 200,
                message: "Complaints udated",
                data: data,
            });
        }).catch((err) => {
            res.send(err);
        })
};
