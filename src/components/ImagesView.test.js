import { render, screen } from '@testing-library/react';
import ImagesView from './ImagesView';


const dummyData = {
    "examinations": [
        {
        "date": "2019-05-01",
        "images": [
            {
            "eye": "R",
            "modality": "OCT",
            "note": "Note about the eyes",
            "thumbnail": "/images/20190401_oct_left.jpg"
            }
        ]
        }
    ]
}


test('passes json values to imageView', () => {
    render(<ImagesView data={dummyData}/>);

    const dateLabel = screen.getByText("Examination date: 2019-05-01");
    const eyeLabel = screen.getByText("Eye: R");
    const modalityLabel = screen.getByText("Modality: OCT");
    const noteLabel = screen.getByText("Note: Note about the eyes");
    const thumbnailLabel = screen.getByText("Thumbnail: /images/20190401_oct_left.jpg");

    expect(dateLabel).toBeInTheDocument();
    expect(eyeLabel).toBeInTheDocument();
    expect(modalityLabel).toBeInTheDocument();
    expect(noteLabel).toBeInTheDocument();
    expect(thumbnailLabel).toBeInTheDocument();
  
  });