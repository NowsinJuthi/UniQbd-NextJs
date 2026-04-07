import path from "path";
import homeSliderModel from "../models/homeSliderModel.js";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "serverFolder/middleware/uploads");

export async function homeSliderController(req, res) {
  try {
    console.log("Files received:", req.files);

    const images = req.files;
    if (!images || images.length === 0) {
      console.log("No images uploaded");
      return res.status(400).json({ success: false, message: "No images uploaded" });
    }

    const paths = images.map(img => "/uploads/" + img.filename);
    console.log("Mapped paths for DB:", paths);


    const sliderDoc = new homeSliderModel({ images: paths });
    const savedDoc = await sliderDoc.save();

    console.log("Document saved:", savedDoc);

    res.status(200).json({
      success: true,
      message: "Images uploaded successfully",
      images: paths,
    });
  } catch (err) {
    console.error("Error saving HomeSlider:", err);
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function getHomeSliderImages(req, res) {
  try {
    const sliders = await homeSliderModel.find().sort({ createdAt: -1 });
    const images = sliders.flatMap(slider => slider.images);
    console.log("Fetched images:", images);

    res.status(200).json({ success: true, data: images });
  } catch (err) {
    console.error("Error fetching HomeSlider:", err);
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function homeSliderDeleteController(req, res) {
   try {
    const filename = req.params.filename;
    const filePath = path.join(uploadDir, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, message: "File not found" });
    }

    fs.unlinkSync(filePath);

    homeSliderModel.updateMany({}, { $pull: { images: { $in: [`/uploads/${filename}`] } } })
      .then(() => {
        res.json({ success: true, message: "Deleted successfully" });
      })
      .catch(err => res.status(500).json({ success: false, message: err.message }));
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}