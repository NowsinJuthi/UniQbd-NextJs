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
        const res = await axios.get("http://localhost:3001/api/v1/home-slider/images", {
          withCredentials: true,
        });
        if (res.data.success) {
          setImages(res.data.data); 
          setPreviewImages(res.data.data.map(img => `http://localhost:3001${img}`));
        }
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
    fetchImages();
  }, []);


  const handleFilesChange = (uploadedImages = []) => {
    if (!Array.isArray(uploadedImages)) uploadedImages = [uploadedImages];

    setImages(prev => [...prev, ...uploadedImages.filter(img => !prev.includes(img))]);
    setPreviewImages(prev => [
      ...prev,
      ...uploadedImages.map(img => `http://localhost:3001${img}`).filter(p => !prev.includes(p)),
    ]);
  };


  const removeImage = async (index) => {
    const imgPath = images[index]; 
    const filename = imgPath.split("/").pop();

    try {
      await axios.delete(`http://localhost:3001/api/v1/home-slider/${filename}`, {
        withCredentials: true,
      });

      setImages(prev => prev.filter((_, i) => i !== index));
      setPreviewImages(prev => prev.filter((_, i) => i !== index));
    } catch (err) {
      console.error("Failed to delete image:", err);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gray-50 shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-3 p-8 border-r bg-gray-100">
            <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
            <AdminMenuPage />
          </div>

          <div className="md:col-span-9 p-10 bg-white rounded-2xl">
            <h1 className="text-3xl font-bold mb-8">Home Slider</h1>

            <UploadBox
              url="http://localhost:3001/api/v1/home-slider"
              name="images"
              multiple
              onChange={handleFilesChange}
            />

            {previewImages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Preview</h3>
                <div className="flex gap-4 flex-wrap">
                  {previewImages.map((src, index) => (
                    <div key={index} className="relative w-60 h-40">
                      <img src={src} className="w-full h-full object-cover rounded-xl shadow" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-white rounded-full"
                      >
                        <RxCrossCircled size={26} className="text-red-500" />
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