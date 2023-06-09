

function ImageView(props) {

    const date = props.date;
    const eye = props.eye;
    const modality = props.modality;
    const note = props.note;
    const thumbnail = props.thumbnail;

    return (
      <div className="ImageView">
        <p className="ExamDate">Examination date: {date}</p>
        <p className="Eye">Eye: {eye}</p>
        <p className="Modality">Modality: {modality}</p>
        <p className="Note" data-testid="Note">Note: {note}</p>
        <img className="EyeImage" src={require("../data" + thumbnail)} alt={thumbnail}/>
      </div>
    );
  }
  
  export default ImageView;
