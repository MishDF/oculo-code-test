
import { render, screen } from '@testing-library/react';
import UploadImage from './UploadImage';

// test('renders file picker button', () => {
//   render(<UploadImage/>);
//   const filePicker = screen.getByRole()
//   expect(filePicker).toBeInTheDocument()
// });

test('renders upload button', () => {
  render(<UploadImage/>);
  const button = screen.getByText(/Upload image/i)
  expect(button).toBeInTheDocument()
});

