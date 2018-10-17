import React from 'react'
import BooksApp from './App'
import { shallow } from './enzyme'

describe('App', () => {
  const app = shallow(<BooksApp />);
  it('renders without crashing', () => {
    expect(app.find('.app').exists()).toBe(true);
  })
})


