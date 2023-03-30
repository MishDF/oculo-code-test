import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

const unsortedDummyData = {
    "examinations": [
        {
        "date": "2019-05-01",
        "images": [
                {
                "eye": "R",
                "modality": "OCT",
                "note": "first",
                "thumbnail": "/images/20190401_oct_left.jpg"
                },
                {
                "eye": "R",
                "modality": "OP",
                "note": "second",
                "thumbnail": "/images/20190401_oct_left.jpg"
                }
            ]
        },
        {
            "date": "2019-04-01",
            "images": [
                {
                "eye": "R",
                "modality": "OCT",
                "note": "third",
                "thumbnail": "/images/20190401_oct_left.jpg"
                },

            ]
        },
        {
            "date": "2019-05-01",
            "images": [
                {
                "eye": "R",
                "modality": "OCT",
                "note": "fourth",
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
    const image = screen.getByAltText("/images/20190401_oct_left.jpg");

    expect(dateLabel).toBeInTheDocument();
    expect(eyeLabel).toBeInTheDocument();
    expect(modalityLabel).toBeInTheDocument();
    expect(noteLabel).toBeInTheDocument();
    expect(image.src).toContain("20190401_oct_left.jpg");
  });

  test('sorts by date', () => {
    render(<ImagesView data={unsortedDummyData}/>);

    const dateButton = screen.getByText("Date");

    fireEvent.click(dateButton);

    const notesLabels =  screen.getAllByTestId("note", {exact: false});

    expect(notesLabels.length).toBe(4);
    expect(notesLabels[0]).toHaveTextContent("third");
    expect(notesLabels[1]).toHaveTextContent("first");
    expect(notesLabels[2]).toHaveTextContent("second");
    expect(notesLabels[3]).toHaveTextContent("fourth");

  });

  test('sorts by modality', () => {
    render(<ImagesView data={unsortedDummyData}/>);

    const modalityButton = screen.getByText("Modality");

    fireEvent.click(modalityButton);

    const notesLabels =  screen.getAllByTestId("note", {exact: false});

    expect(notesLabels.length).toBe(4);
    expect(notesLabels[0]).toHaveTextContent("first");
    expect(notesLabels[1]).toHaveTextContent("third");
    expect(notesLabels[2]).toHaveTextContent("fourth");
    expect(notesLabels[3]).toHaveTextContent("second");

  });