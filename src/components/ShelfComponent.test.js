import React from 'react'
import ShelfComponent from './ShelfComponent'
import { shallow } from '../enzyme'
import { Book1 } from '../tests/fixtures'

describe('ShelfComponent', () => {
    const title = 'My Shelf';
    const shelf = 'my-shelf';
    const books = [Book1];
    const mockGetBooks = jest.fn(() => books);
    const mockUpdateShelves = jest.fn();
    const props = { title: title, shelf: shelf, getBooks: mockGetBooks, updateShelves: mockUpdateShelves };
    const shelfComponent = shallow(<ShelfComponent {...props} />);

    beforeEach(() => {
        fetch.resetMocks();
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
    });

    describe('initializes the `state`', () => {
        it('with title passed via props', () => {
            expect(shelfComponent.state().title).toEqual(props.title);
        })

        it('with shelf passed via props', () => {
            expect(shelfComponent.state().shelf).toEqual(props.shelf);
        })

        it('with a getBooks callback passed via props', () => {
            expect(shelfComponent.state().getBooks).toEqual(props.getBooks);
        })

        it('with a updateShelves callback passed via props', () => {
            expect(shelfComponent.state().updateShelves).toEqual(props.updateShelves);
        })
    });

    describe('when rendered', () => {
        it('shows the bookshelf title cover', () => {
            expect(shelfComponent.find('.bookshelf-title').exists()).toBe(true);
        });

        it('shows the bookshelf books', () => {
            expect(shelfComponent.find('.books-grid').exists()).toBe(true);
            expect(shelfComponent.find('.books-grid-element').exists()).toBe(true);
        });

        it('calls loadBooks with the new value', () => {
            expect(mockGetBooks).toHaveBeenCalledTimes(1);
        });
    });

    describe('loadBooks', () => {
        it('returns an array of books when getBooks returns something', () => {
            expect(shelfComponent.instance().loadBooks()).toEqual(books);
        });

        it('returns an empty arraywhen getBooks returns nothing', () => {
            shelfComponent.setState({ getBooks: jest.fn() });
            expect(shelfComponent.instance().loadBooks()).toEqual([]);
        });
    });
});
