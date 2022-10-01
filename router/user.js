import express from "express";
import {
  getUser,
  getUsers,
  getDashboardDetail,
  searchUser,
  deleteUser,
  updateProfileImage,
  filterList
} from "../controller/user.js";
import { verifyAdmin, verifySuperAdmin, verifyUser } from "../utils/verifyToken.js";


export const user = express.Router();

//detail of user
user.post("/get", verifyUser, getUser);
user.post("/get/all", verifyAdmin, getUsers);
user.post("/get/dashboard/detail", getDashboardDetail);

//search by name
user.post("/search", searchUser);

//remove user
user.post("/delete", deleteUser);

// Filter the user Search
user.post("/filter", filterList);

//Update Profile Image
user.post("/update", updateProfileImage);

//404
user.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
