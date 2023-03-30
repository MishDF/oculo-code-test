import React, { useState } from "react";

function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedImage){
            //add on submit functionality
            setUploadedImages([selectedImage]);
        }
    };

    return (
        <div className="UploadImage">
            <div className="imageForm">
                <form onSubmit={handleSubmit}>
                    <input 
                    type="file" 
                    accept="image/*" 
                    data-testid="file-input"
                    onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                    }}
                    />
                    <button type="submit" data-testid="submit-button">Upload Image</button>
                </form>
            </div>
            <div className="uploadedImages"> 
                {uploadedImages[0] && <p data-testid="uploaded-name">{uploadedImages[0].name}</p>}
            </div>
        </div>
    );
}

export default UploadImage;