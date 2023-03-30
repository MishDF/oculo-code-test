
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


test('uploaded image is changed when file submitted', () => {
  render(<UploadImage/>);
  const fileInput = screen.getByTestId(/file-input/i);

  const file = new File(['test image content'], 'test.jpg', {
    type: 'image/jpeg',
  });
  fireEvent.change(fileInput, { target: { files: [file] } });
  
  const button = screen.getByText(/Upload image/i);
  fireEvent.click(button);

  const fileName = screen.getByTestId('uploaded-name-0');

  expect(fileName.textContent).toBe('test.jpg');
})

test('uploading multiple files keeps both', () => {
  render(<UploadImage/>);
  const fileInput = screen.getByTestId(/file-input/i);

  const file = new File(['test image content'], 'test.jpg', {
    type: 'image/jpeg',
  });
  fireEvent.change(fileInput, { target: { files: [file] } });
  
  const button = screen.getByText(/Upload image/i);
  fireEvent.click(button);

  const file2 = new File(['test image 2 content'], 'test2.jpg', {
    type: 'image/jpeg',
  });
  fireEvent.change(fileInput, { target: { files: [file2] } });
  fireEvent.click(button);

  const fileName1 = screen.getByTestId('uploaded-name-0');
  const fileName2 = screen.getByTestId('uploaded-name-1');
 
  expect(fileName1.textContent).toBe('test.jpg');
  expect(fileName2.textContent).toBe('test2.jpg');
})