const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let texts = [];

app.get("/texts", (req, res) => {
    res.json(texts);
});

app.post("/texts", (req, res) => {
    const text = req.body.text;
    const id = texts.length + 1;
    texts.push({ id, text });
    res.json(texts);
});

/* app.post("/texts", (req, res) => {
    const text = req.body.text;
    const id = texts.length + 1;
    texts.push({ id, text });
    res.json({ id, text });
}) */;

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
