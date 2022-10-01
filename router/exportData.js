import express from "express";
import { exportAttendance, exportAttendanceByMonth, exportEmp, exportSalaryByMonth } from "../controller/exportData.js";
import { verifyAdmin } from "../utils/verifyToken.js";

export const exportdata = express.Router();

//In Use
exportdata.post('/attendance/month', verifyAdmin, exportAttendanceByMonth)



//Not In Use
exportdata.post('/emp', exportEmp)
exportdata.post('/attendance', exportAttendance)
exportdata.post('/pay', exportSalaryByMonth)

//404
exportdata.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
