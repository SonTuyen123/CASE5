import mongoose, { Schema } from "mongoose";

const listMp3Schemas = new mongoose.Schema({
  name: String,
  category: String,
  singer: String,
  image: String,
  mp3: String,
  user_id: String,
});

const ListMp3 = mongoose.model("ListMp3s", listMp3Schemas);

export default ListMp3;
