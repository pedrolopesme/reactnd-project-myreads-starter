import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import {shallow} from './enzyme'

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

describe('App', () => {
  const app = shallow(<BooksApp />);

  it('renders without crashing', () => {
    // const div = document.createElement('div')
    // ReactDOM.render(<BooksApp />, div)
    expect(app).toMatchSnapshot();
  })
})  


