import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './components/BookingPage';


test('Test for some static text being rendered', () => {
  render(<BrowserRouter><BookingPage /></BrowserRouter>)

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
  const initializeTimes = require("./components/BookingPage").initializeTimes.availableTimes
  expect(initializeTimes.length).toBeGreaterThan(0)

  const updateTimes = require("./components/BookingPage").updateTimes
  expect(updateTimes([], "2024-03-17").availableTimes).toContain("--- Select a time ---")
});


test('Validate the HTML5 validation is applied', () => {
  render(<BrowserRouter><BookingPage /></BrowserRouter>)

  const dateElement = screen.getByLabelText('date', {exact: false});
  const timeElement = screen.getByLabelText(/choose time/i);
  const guestsElement = screen.getByLabelText('guests', {exact: false});
  const buttonElement = screen.getByTestId("submitButton");
  
  expect(dateElement).toHaveAttribute("min")
  expect(dateElement).toHaveAttribute("required")
  expect(timeElement).toHaveAttribute("required")
  expect(guestsElement).toHaveAttribute("min")
  expect(guestsElement).toHaveAttribute("max")
  expect(guestsElement).toHaveAttribute("required")
  expect(buttonElement).toHaveAttribute("disabled")
});