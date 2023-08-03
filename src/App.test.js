/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

// -------------------------------------------------------------------------------------------------------------------

test('Button should render', () => {
  // render = setting up a test UI that can be used to check if things are showing up the way you expect them to.
  render(<App />);
  expect(screen.getByText("Current theme: light")).toBeInTheDocument();
  expect(screen.getByText("Show hidden content")).toBeInTheDocument();
});

// -------------------------------------------------------------------------------------------------------------------

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', () => {
  // render the app.
  render(<App />);

  expect(screen.getByText("Current theme: light")).toBeInTheDocument();

  // go to screen, get the element called "Current theme: light", and click on it (fire event).
  fireEvent.click(screen.getByText("Current theme: light"))
  // check if test passes.
  expect(screen.getByText("Current theme: dark")).toBeInTheDocument();
});

// -------------------------------------------------------------------------------------------------------------------

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  render(<App />);

  // tests background color to see if it's light.
  expect(document.body).toHaveStyle('backgroundColor: #FFF')

  // tests background color to see if it's dark.
  fireEvent.click(screen.getByText("Current theme: light"))
  expect(document.body).toHaveStyle('backgroundColor: #333')

});

// -------------------------------------------------------------------------------------------------------------------

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);

  // ensures "Show hidden content" button renders.
  expect(screen.getByText('Show hidden content')).toBeInTheDocument();
  // ensures "this content is hidden by default" is NOT showing.
  expect(screen.queryByText('this content is hidden by default')).not.toBeInTheDocument();

  // 
  fireEvent.click(screen.getByText("Show hidden content"))
  expect(screen.getByText('Hide hidden content')).toBeInTheDocument();
  expect(screen.getByText('this content is hidden by default')).toBeInTheDocument();
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
