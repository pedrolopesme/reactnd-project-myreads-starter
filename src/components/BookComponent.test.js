import React from 'react'
import BookComponent from './BookComponent'
import { shallow } from '../enzyme'
import { Book1 } from '../tests/fixtures'

describe('BookComponent', () => {
    const mockUpdateShelves = jest.fn();
    const props = { book: { ...Book1 }, updateShelves: mockUpdateShelves };
    const bookComponent = shallow(<BookComponent {...props} />);

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('renders properly', () => {
        expect(bookComponent).toMatchSnapshot();
    });

    describe('initializes the `state`', () => {
        it('with a book entry containing the book passed via props', () => {
            expect(bookComponent.state().book).toEqual(props.book);
        })

        it('with a updateShelves callback passed via props', () => {
            expect(bookComponent.state().updateShelves).toEqual(props.updateShelves);
        })
    });

    describe('when rendered', () => {
        it('shows the book cover', () => {
            expect(bookComponent.find('.book-cover').exists()).toBe(true);
        });

        it('shows the book title', () => {
            expect(bookComponent.find('.book-title').exists()).toBe(true);
        });

        it('shows the book authors', () => {
            expect(bookComponent.find('.book-authors').exists()).toBe(true);
        });

        it('shows the moveTo shelf selector', () => {
            expect(bookComponent.find('.move-to-shelf').exists()).toBe(true);
        });
    });

    describe('when trigging onChange in the `move to shelf` select', () => {
        beforeEach(() => {
            fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
            bookComponent.find('.move-to-shelf').simulate('change', { target: { value: 'something' } });
        });

        afterEach(() => {
            const mockUpdateShelves = jest.fn();
            bookComponent.setState({ updateShelves: mockUpdateShelves });
        });

        it('calls updateBook with the new value', () => {
            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual("https://reactnd-books-api.udacity.com/books/" + Book1.id);
        });

        it('calls updateShelves with the new value', () => {
            expect(mockUpdateShelves).toHaveBeenCalledTimes(1);
        });
    });

    describe('calculateSelectShelf', () => {
        it('returns books\' shelf when there is one', () => {
            expect(bookComponent.instance().calculateSelectShelf()).toEqual(Book1.shelf);
        });
        
        it('returns `none` when there is no shelves', () => {
            let book = bookComponent.state().book;
            delete book.shelf;
            bookComponent.setState({ book: book });
            expect(bookComponent.instance().calculateSelectShelf()).toEqual("none");
        });
    });
});
