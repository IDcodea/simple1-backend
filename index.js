import express from "express";
import cors from "cors";
import UserRoot from "./routes/UserRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoot);

app.listen(5000, () => console.log('Server up and running'));