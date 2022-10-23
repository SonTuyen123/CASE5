import mongoose from "mongoose";
declare const ListMp3: mongoose.Model<{
    name?: string;
    category?: string;
    singer?: string;
    image?: string;
    mp3?: string;
    user_id?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    category?: string;
    singer?: string;
    image?: string;
    mp3?: string;
    user_id?: string;
}>>;
export default ListMp3;
