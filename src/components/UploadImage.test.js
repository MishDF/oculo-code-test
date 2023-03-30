
import { render, screen, fireEvent } from '@testing-library/react';
import UploadImage from './UploadImage';

test('renders file input', () => {
  render(<UploadImage/>);
  const fileInput = screen.getByTestId(/file-input/i);
  expect(fileInput).toBeInTheDocument();
})

test('renders upload button', () => {
  render(<UploadImage/>);
  const button = screen.getByText(/Upload image/i)
  expect(button).toBeInTheDocument()
});

test('selected image is changed when fileInput changed', () => {
  render(<UploadImage/>);
  const fileInput = screen.getByTestId(/file-input/i);

  const file = new File(['test image content'], 'test.jpg', {
    type: 'image/jpeg',
  });
  fireEvent.change(fileInput, { target: { files: [file] } });

  const fileName = screen.getByTestId('file-name');

  expect(fileName.textContent).toBe('test.jpg');
})

test('uploaded image is changed when file submitted', () => {
  render(<UploadImage/>);
  const fileInput = screen.getByTestId(/file-input/i);

  const file = new File(['test image content'], 'test.jpg', {
    type: 'image/jpeg',
  });
  fireEvent.change(fileInput, { target: { files: [file] } });
  
  const button = screen.getByText(/Upload image/i);
  fireEvent.click(button);

  const fileName = screen.getByTestId('uploaded-name');

  expect(fileName.textContent).toBe('test.jpg');
})
