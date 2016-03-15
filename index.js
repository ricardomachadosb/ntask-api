import express from "express";
const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.json({status: "NTask API"}));

app.listen(PORT, () => console.log(`NTASK API - porta ${PORT}`));