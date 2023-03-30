import ImageView from './ImageView'


function ImagesView(props) {
    var imageArray = [];

    for (let index = 0; index < props.data.examinations.length; index++) {
            props.data.examinations[index].images.map( image => {
                imageArray.push({date: props.data.examinations[index].date,
                eye: image.eye,
                modality: image.modality,
                note: image.note,
                thumbnail: image.thumbnail,
                })
            })
    }

  return (
    <div className="ImagesView">
        {imageArray.map( image => {
            return <ImageView 
                date={image.date} 
                eye={image.eye} 
                modality={image.modality} 
                note={image.note} 
                thumbnail={image.thumbnail}/>
        })}
      
    </div>
  );
}

export default ImagesView;