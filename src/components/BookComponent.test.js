import React from 'react'
import BookComponent from './BookComponent'
import {shallow} from '../enzyme'
import {Book1} from '../tests/fixtures'

describe('BookComponent', () => {
    const props = { book: {...Book1} };
    const bookComponent = shallow(<BookComponent {...props} />);

    it('renders properly', () => {
        expect(bookComponent).toMatchSnapshot();
    });
});
