import foodModel from "../models/foodemodel.js";

const addFood = async (req, res) => {
    if (!req.body.name || !req.body.description || !req.body.price || !req.file) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        Image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

export { addFood };
