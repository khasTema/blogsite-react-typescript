import renderer from 'react-test-renderer';
import React from 'react'
import { PostCard } from './PostCard';
import { JSX } from 'react/jsx-runtime';

jest.mock('../../interface');
jest.mock('./PostCard.module.css');
jest.mock('./PostCard.config');
jest.mock('../UI/Button');

const renderTree = (tree: JSX.Element) => renderer.create(tree);
describe('<PostCard>', () => {
  it('should render component', () => {
    expect(renderTree(<PostCard userId={0} id={0} title={''} body={''}/>).toJSON()).toMatchSnapshot();
  });
  
});