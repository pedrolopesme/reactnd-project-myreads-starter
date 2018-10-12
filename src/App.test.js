import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import {shallow} from './enzyme'

describe('App', () => {
  const app = shallow(<BooksApp />);
  it('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  })
})  


