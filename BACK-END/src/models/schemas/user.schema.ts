import mongoose, { Schema } from "mongoose";

const userSchemas = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  role: String,
  phone: String,
  email_verify: String,
  image: String,
  password: String,
});

const Users = mongoose.model("Users", userSchemas);

export default Users;
