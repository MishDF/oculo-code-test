import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading & user sotry', () => {
  render(<App />);
  const heading = screen.getByText(/Oculo Front-End Code Test/i)
  expect(heading).toBeInTheDocument();

});

test('renders user story', () => {
  render(<App />);
  const userStory = screen.getByText(/As an Optometrist I would like to group the images of the eye into the appropriate modality./i)
  expect(userStory).toBeInTheDocument();
})
