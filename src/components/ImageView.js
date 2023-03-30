

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
        <p className="Note">Note: {note}</p>
        <p className="Thumbnail">Thumbnail: {thumbnail}</p>

      </div>
    );
  }
  
  export default ImageView;