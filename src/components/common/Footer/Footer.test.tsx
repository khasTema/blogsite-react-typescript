import renderer from 'react-test-renderer';
import React from 'react'
import { Footer } from './Footer';
import { JSX } from 'react/jsx-runtime';

jest.mock('./Footer.config');
jest.mock('./Footer.module.css');

const renderTree = (tree: JSX.Element) => renderer.create(tree);
describe('<Footer>', () => {
  it('should render component Footer', () => {
    expect(renderTree(<Footer 
    />).toJSON()).toMatchSnapshot();
  });
  
});