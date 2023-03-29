
function UploadImage() {
    return (
        <div className="UploadImage">
            <div className="filePicker">
                <input type="file" accept="image/*" />
                {/* add on change?? */}
            </div>
            <div className="UploadImageButton">
                <button>Upload Image</button>
            </div>
        </div>
    );
}

export default UploadImage;