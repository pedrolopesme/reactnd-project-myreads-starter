import React from 'react'
import ShelvesComponent from './ShelvesComponent'
import { shallow } from '../enzyme'
import { Book1 } from '../tests/fixtures'

describe('ShelvesComponent', () => {
    const books = [Book1];
    const wrapper = shallow(<ShelvesComponent />);

    beforeEach(() => {
        const httpResponse = { books: books }
        fetch.resetMocks();
        fetch.mockResponseOnce(JSON.stringify({ data: httpResponse }))
    });

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('contains an wrapper div', () => {
        expect(wrapper.find('.shelves').exists()).toBe(true);
    });

    it('initializes the `state` with an empty array of books', () => {
        expect(wrapper.state().books).toEqual([]);
    });

    describe('getBooks', () => {
        it('returns only books from a given shelf', () => {
            wrapper.setState({ books: books });
            expect(wrapper.instance().getBooks(Book1.shelf)).toEqual(books);
            expect(wrapper.instance().getBooks('any-other-shelf')).toEqual([]);
        });
    });

    describe('updateShelves', () => {
        it('to load books', () => {
            const mockLoadBooks = jest.fn();
            wrapper.instance().loadBooks = mockLoadBooks;
            wrapper.instance().updateShelves();
            expect(mockLoadBooks).toHaveBeenCalledTimes(1);
        });
    });
});
