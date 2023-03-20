import { UserModel } from "../Schema/UserSchema.js";

export const Postuser = async (req, res) => {
    const postUser = new UserModel({
        Name: req.body.Name,
        Batch: req.body.Batch,
        Year: req.body.Year,
        Department: req.body.Department,
        Class: req.body.Class,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
    });
    postUser.save().then(() => {
        res.send({
            status: 200,
            message: "User is added",
        });
    }).catch((err) => {
        res.send(err);
    })
};
