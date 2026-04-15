"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadBox from "../uploadBox/page";
import { RxCrossCircled } from "react-icons/rx";
import { AdminMenuPage } from "../Menu/page";

const HomeSlider = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/v1/home-slider/images",
          { withCredentials: true }
        );

        if (res.data.success) {
          setImages(res.data.data);
          setPreviewImages(
            res.data.data.map((img) => `http://localhost:3001${img}`)
          );
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  const handleFilesChange = (uploadedImages = []) => {
    if (!Array.isArray(uploadedImages)) uploadedImages = [uploadedImages];

    setImages((prev) => [
      ...prev,
      ...uploadedImages.filter((img) => !prev.includes(img)),
    ]);

    setPreviewImages((prev) => [
      ...prev,
      ...uploadedImages
        .map((img) => `http://localhost:3001${img}`)
        .filter((p) => !prev.includes(p)),
    ]);
  };

  const removeImage = async (index) => {
    const imgPath = images[index];
    const filename = imgPath.split("/").pop();

    try {
      await axios.delete(
        `http://localhost:3001/api/v1/home-slider/${filename}`,
        { withCredentials: true }
      );

      setImages((prev) => prev.filter((_, i) => i !== index));
      setPreviewImages((prev) => prev.filter((_, i) => i !== index));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">

      {/* TOP HEADER */}
      <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Home Slider</h1>
        <span className="text-sm text-white/60">Admin Panel</span>
      </div>

      <div className="grid grid-cols-12 gap-6 p-6">

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-3">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
            <h2 className="text-xl font-bold mb-6 text-center">
              Admin Panel
            </h2>
            <AdminMenuPage />
          </div>
        </div>

        {/* MAIN */}
        <div className="col-span-12 md:col-span-9 space-y-6">

          {/* TITLE CARD */}
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
            <h2 className="text-xl font-semibold">
              Manage Slider Images
            </h2>
            <p className="text-sm text-white/60 mt-1">
              Upload, preview and remove homepage slider images
            </p>
          </div>

          {/* MAIN GRID (FIVERR STYLE LAYOUT) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* UPLOAD CARD */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Upload Images
              </h3>

              <div className="border-2 border-dashed border-white/20 rounded-xl p-4 hover:border-button transition">
                <UploadBox
                  url="http://localhost:3001/api/v1/home-slider"
                  name="images"
                  multiple
                  onChange={handleFilesChange}
                />
              </div>
            </div>

            {/* PREVIEW CARD */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Uploaded Images
                </h3>

                <span className="text-sm text-white/60">
                  {previewImages.length} items
                </span>
              </div>

              {previewImages.length === 0 ? (
                <p className="text-white/50 text-sm">
                  No images uploaded yet
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[420px] overflow-y-auto pr-2">

                  {previewImages.map((src, index) => (
                    <div
                      key={index}
                      className="relative group rounded-xl overflow-hidden border border-white/10 shadow"
                    >
                      <img
                        src={src}
                        className="w-full h-36 object-cover group-hover:scale-110 transition"
                      />

                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-white/90 p-1 rounded-full hover:bg-red-100"
                      >
                        <RxCrossCircled size={20} className="text-red-500" />
                      </button>
                    </div>
                  ))}

                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeSlider;