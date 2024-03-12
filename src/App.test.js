import { render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';


test('Test for some static text being rendered', () => {
  render(<BookingPage />)

  const headingElement = screen.getByText('reserve a table', {exact: false})
  const dateElement = screen.getByLabelText('date', {exact: false});
  const timeElement = screen.getByLabelText(/choose time/i);
  const guestsElement = screen.getByLabelText('guests', {exact: false});
  const occasionElement = screen.getByLabelText('occasion', {exact: false});
  const buttonElement = screen.getByTestId("submitButton");
  
  expect(headingElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(timeElement).toBeInTheDocument();
  expect(guestsElement).toBeInTheDocument();
  expect(occasionElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});


test('Test the updateTimes and initializeTimes functions', () => {
  const initializeTimes = require("./components/BookingPage").initializeTimes
  expect(initializeTimes).toStrictEqual([])

  const updateTimes = require("./components/BookingPage").updateTimes
  expect(updateTimes(["01:00", "02:00", "03:00"], "6")).toStrictEqual(["01:00", "02:00", "03:00"])
});
