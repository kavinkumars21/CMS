import { SolversModel } from "../Schema/SolversSchema.js";

export const postSolver = async (req, res) => {
   const Solver = new SolversModel({
      Name: req.body.Name,
      Mobile: req.body.Mobile,
      EmpId: req.body.EmpId,
      Category: req.body.Category,
   });
   Solver.save().then(() => {
      res.send({
         status: 200,
         message: "Solvers and Category created",
      });
   }).catch((err) => {
      res.send(err);
   })
};
