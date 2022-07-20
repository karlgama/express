import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura-livros:123@cluster0.z2lpb.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;