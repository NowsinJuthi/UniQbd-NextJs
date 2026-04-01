"use client";

import React, { useState } from "react";
import axios from "axios";
import { AdminMenuPage } from "../Menu/page";
import UploadBox from "../uploadBox/page";
import { RxCrossCircled } from "react-icons/rx";

const HomeSlider = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  // remove single image
  const removeImage = (index) => {
    const updatedImages = [...images];
    const updatedPreview = [...previewImages];

    updatedImages.splice(index, 1);
    updatedPreview.splice(index, 1);

    setImages(updatedImages);
    setPreviewImages(updatedPreview);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please select image");
      return;
    }

    const formData = new FormData();
    images.forEach((img) => formData.append("images", img));

    try {
      setLoading(true);

      const res = await axios.post("/api/v1/home-slider", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Upload success");
      console.log(res.data);

      setImages([]);
      setPreviewImages([]);
    } catch (error) {
      console.log(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 text-button">
      <div className="max-w-7xl mx-auto rounded-3xl bg-button/4 shadow-lg shadow-button/30 overflow-hidden">
        <div className="grid md:grid-cols-12">
          
          {/* sidebar */}
          <div className="md:col-span-3 p-8 border-r bg-button/5">
            <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
            <AdminMenuPage />
          </div>

          {/* content */}
          <div className="md:col-span-9 p-10 bg-card/5 rounded-2xl">
            <h1 className="text-3xl font-bold mb-8">Home Slider</h1>

            <form onSubmit={handleUpload}>
              <UploadBox
                type="file"
                multiple
                accept="image/*"
                name= "images"
                onChange={handleFilesChange}
              />

              <button
                disabled={loading}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
              >
                {loading ? "Uploading..." : "Upload Images"}
              </button>
            </form>

            {/* preview */}
            {previewImages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Preview</h3>

                <div className="flex gap-4 flex-wrap">
                  {previewImages.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-60 h-40"
                    >
                      <img
                        src={src}
                        className="w-full h-full object-cover rounded-xl shadow"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-white rounded-full"
                      >
                        <RxCrossCircled
                          size={26}
                          className="text-red-500"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;