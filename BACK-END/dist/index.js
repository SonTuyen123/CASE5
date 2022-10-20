"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const ConnectDB_1 = require("./src/models/schemas/ConnectDB");
const user_router_1 = __importDefault(require("./src/router/user.router"));
const PORT = 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.set("view engine", "ejs");
app.set("views", "./src/views");
const db = new ConnectDB_1.ConnectDB();
db.connect()
    .then(() => {
    console.log("DB Connected!");
})
    .catch((err) => {
    console.log(err.message);
});
app.use(body_parser_1.default.json());
app.use("/admin", user_router_1.default);
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map