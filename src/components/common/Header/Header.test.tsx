import renderer from 'react-test-renderer';
import React from 'react'
import { Header } from './Header';
import { JSX } from 'react/jsx-runtime';

jest.mock('react-router-dom');
jest.mock('./Header.module.css');
jest.mock('./Header.config');

const renderTree = (tree: JSX.Element) => renderer.create(tree);
describe('<Header>', () => {
  it('should render component Header', () => {
    expect(renderTree(
      <Header />
    ).toJSON()).toMatchSnapshot();
  });
});