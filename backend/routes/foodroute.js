import express from 'express';
import { addFood } from '../controllers/foodcontroller.js';
import multer from "multer";
import fs from 'fs';

const foodRouter = express.Router();

// Ensure 'uploads' directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const uploads = multer({ storage: storage });

const uploadMiddleware = (req, res, next) => {
    uploads.single("image")(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading
            console.error("Multer Error:", err.message);  // Log error message
            return res.status(400).json({ success: false, message: err.message });
        } else if (err) {
            // An unknown error occurred
            console.error("Unknown Error:", err);  // Log error
            return res.status(500).json({ success: false, message: "Error uploading file" });
        }
        next();
    });
};


foodRouter.post("/add", uploadMiddleware, (req, res, next) => {
    console.log(req.file); // Log uploaded file details
    console.log(req.body); // Log request body
    next();
}, addFood);


export default foodRouter;
