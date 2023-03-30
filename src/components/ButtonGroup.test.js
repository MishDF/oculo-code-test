import { fireEvent, render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

test('renders buttons', () => {
    render(<ButtonGroup/>); 

    const dateButton = screen.getByText("Date");
    const modalityButton = screen.getByText("Modality");

    expect(dateButton).toBeInTheDocument();
    expect(modalityButton).toBeInTheDocument();
  });

  test('Only one button can be active', () => {
    render(<ButtonGroup onClick={() => void 0}/>); 

    const dateButton = screen.getByText("Date");
    const modalityButton = screen.getByText("Modality");

    fireEvent.click(dateButton);

    expect(dateButton.getAttribute("class")).toContain("active");
    expect(modalityButton.getAttribute("class")).not.toContain("active");

    fireEvent.click(modalityButton);

    expect(dateButton.getAttribute("class")).not.toContain("active");
    expect(modalityButton.getAttribute("class")).toContain("active");

  });