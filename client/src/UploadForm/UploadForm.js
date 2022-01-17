import React, { useState, useEffect } from 'react';
import './UploadForm.css'

const UploadForm = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <div className="upload-form-for-custom-image">
      <input type="file" multiple accept="image/*" onChange={onImageChange}/>
      { imageURLs.map(imageSrc => <img src={imageSrc} alt ="" />) }
    </div>
  )
}

export default UploadForm