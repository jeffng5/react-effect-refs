// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import App from "./App"
import {Card} from "./Card"

// smoke tests
test('it renders without crashing', () => {
    render(<App />);
    });   
  // snapshot tests
it("matches App snapshot", function(){
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  })


// smoke tests
test('it renders without crashing', () => {
    render(<Card />);
    });   
// snapshot tests
it("matches Card snapshot", function(){
    const {asFragment} = render(<Card />);
    wexpect(asFragment()).toMatchSnapshot();
  })