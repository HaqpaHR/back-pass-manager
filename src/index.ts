import express from "express";
import mongoose from "mongoose";
import config from "config";
import authRouter from "./routes/auth.routes";
import cors from "./middleware/cors.middleware"
import PassRoutes from "./routes/pass.routes";

const app = express();

const dbUrl = "mongodb+srv://admin:Slava1991@cluster0.agcneus.mongodb.net/?retryWrites=true&w=majority?ssl=true"

console.log("Database_URL", process.env.DATABASE_URL);
console.log("Port", process.env.PORT);

const PORT = process.env.PORT || config.get('serverPort')

app.use(cors)
app.use(express.json())
app.use('/', authRouter)
app.use('/', PassRoutes)

const start = async () => {
    try {
        await mongoose.connect(dbUrl)
        app.listen(PORT, () => {
            console.log('Server started', PORT)
        })
    } catch (e) {}
};

start()
