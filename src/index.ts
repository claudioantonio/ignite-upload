import express, { Request, Response } from "express";
import multer from "multer";

const app = express()

const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('file'), function (req, res, next) {
    const { file } = req;
    console.log('File received:', file);
    return res.send();
});

console.log("starting...");
app.listen(3333);
console.log("started!");