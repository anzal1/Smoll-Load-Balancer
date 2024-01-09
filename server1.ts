import express from "express";
import cors from "cors";

const app = express();
const router = express.Router();

app.get("/", (req, res) => {});

app.use(cors());
app.use(express.json());
app.listen(3000, () => console.log("Server1 running on port 3000"));
