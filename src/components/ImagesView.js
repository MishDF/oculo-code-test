import ButtonGroup from './ButtonGroup';
import ImageView from './ImageView'
import React, { useState } from "react";


function ImagesView(props) {
    var tempArray = [];

    for (let index = 0; index < props.data.examinations.length; index++) {
            props.data.examinations[index].images.map( image => {
                tempArray.push({date: props.data.examinations[index].date,
                eye: image.eye,
                modality: image.modality,
                note: image.note,
                thumbnail: image.thumbnail,
                })
            })
    }

    const [imageArray, setImageArray] = useState(tempArray);

    const groupBy = (event) => { 
        if(event.target.name==="Date"){
            setImageArray([...imageArray].sort((a, b) => new Date(...a.date.split('-')) - new Date(...b.date.split('-'))));
        } else if(event.target.name==="Modality"){
            setImageArray([...imageArray].sort((a, b) => a.modality.localeCompare(b.modality)));
        }
      };

  return (
    <div className="ImagesView">
        <div className="groupingButtons">
            <p>Group By:</p>
            <ButtonGroup
            onClick={groupBy}/>
        </div>
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