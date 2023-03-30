import { render, screen } from '@testing-library/react';
import ImageView from './ImageView';

test('renders ??', () => {
    render(<ImageView date="2019-04-01" eye="L" modality="OCT" note="Right eye looks normal" thumbnail="/images/20190401_oct_left.jpg"/>);

    const dateLabel = screen.getByText("Examination date: 2019-04-01");
    const eyeLabel = screen.getByText("Eye: L");
    const modalityLabel = screen.getByText("Modality: OCT");
    const noteLabel = screen.getByText("Note: Right eye looks normal");
    const image = screen.getByAltText("/images/20190401_oct_left.jpg");

    expect(dateLabel).toBeInTheDocument();
    expect(eyeLabel).toBeInTheDocument();
    expect(modalityLabel).toBeInTheDocument();
    expect(noteLabel).toBeInTheDocument();
    expect(image.src).toContain("20190401_oct_left.jpg");
  });
