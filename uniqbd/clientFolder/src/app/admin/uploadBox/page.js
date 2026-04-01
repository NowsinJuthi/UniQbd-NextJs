"use client"

import { MyContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { FaRegImage } from "react-icons/fa";

const UploadBox = ({ onChange, multiple = false, accept = "image/*", className = "" ,props}) => {

    const [previews, setPreviews] = useState([])
    const [uploading, setUploading] = useState(false)

    const context = useContext(MyContext)

    let selectedImages = []
    const formData = new FormData();

    // const onChangeFile = async (else, apiEndPoint)=>{
    //     try {
    //         const files = el.target.files;

    //         setUploading(true)

    //         for (var i=0; i<files.length; i++){
    //             if(files[i] && files[i].type === 'image/jpeg' || files[i].type ===  'image/png' 
    //                 && files[i].type === 'image/webp' && files[i].type === 'image/svg');

    //                 {
    //                     const file = files[i];
    //                 selectedImages.push(file)
    //                 formData.append(props?.name, file)
    //                 }else{
    //                     context?.alertBox("error", "Please select a valid JPG,PNG OR WEVP image file")
    //                     setUploading(false)
    //                 }
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
  return (
    <div className={`relative w-[150px] h-[120px] rounded-md bg-gray-100 p-5 border border-button flex flex-col items-center justify-center ${className}`}>
      <FaRegImage size={40} className="text-gray-400 mb-2" />
      <span className="text-gray-600 text-[13px]">Image Upload</span>
      <input
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={onChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default UploadBox;