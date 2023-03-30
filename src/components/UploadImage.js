import React, { useState } from "react";

function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="UploadImage">
            <div className="filePicker">
                <input 
                type="file" 
                accept="image/*" 
                data-testid="file-input"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />
            </div>
            <div className="currentImage">
                {selectedImage && <p data-testid="file-name">{selectedImage.name}</p>}
            </div>
        </div>
    );
}

export default UploadImage;