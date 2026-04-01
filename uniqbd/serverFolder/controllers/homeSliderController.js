import path from "path";

let imgesArr = [];

export async function homeSliderController(req, res) {
  try {
    imgesArr = []; // reset

    const images = req.files; // multer files

    if (!images || images.length === 0) {
      return res.status(400).json({
        message: "No images uploaded",
        error: true,
        success: false
      });
    }

    // Save filenames or relative paths in array
    images.forEach(img => {
      imgesArr.push("/uploads/" + img.filename); // for frontend access
    });

    return res.status(200).json({
      message: "Images uploaded successfully",
      data: imgesArr,
      error: false,
      success: true
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}