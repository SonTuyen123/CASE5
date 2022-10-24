import mongoose from "mongoose";
declare const Users: mongoose.Model<{
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    role?: string;
    email_verify?: string;
    image?: string;
    password?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    role?: string;
    email_verify?: string;
    image?: string;
    password?: string;
}>>;
export default Users;
