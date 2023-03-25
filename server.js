const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let texts = [];

app.get("/api/texts", (req, res) => {
    res.json(texts);
});

app.post("/api/texts", (req, res) => {
    const text = req.body.text;
    const id = uuidv4();
    texts.push({ id, text });
    res.json(texts);
});

app.delete("/api/texts/:id", (req, res) => {
    const id = req.params.id;
    texts = texts.filter((text) => text.id !== id);
    res.json(texts);
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
