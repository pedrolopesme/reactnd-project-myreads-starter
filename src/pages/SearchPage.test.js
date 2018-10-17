import React from 'react'
import SearchPage from './SearchPage'
import { shallow } from '../enzyme'
import { Book1 } from '../tests/fixtures'

describe('SearchPage', () => {
    const wrapper = shallow(<SearchPage />);

    beforeEach(() => {
        fetch.resetMocks();
    });

    describe('initializes the `state`', () => {
        it('with empty term', () => {
            expect(wrapper.state().term).toEqual("");
        })

        it('with an empty books entry', () => {
            expect(wrapper.state().books).toEqual([]);
        })
    });

    describe('when rendered', () => {
        it('shows a close link', () => {
            expect(wrapper.find('.close-search').exists()).toBe(true);
        });

        it('shows an input for searching', () => {
            expect(wrapper.find('input.search-term').exists()).toBe(true);
        });

        it('shows a list of books', () => {
            expect(wrapper.find('.books-grid').exists()).toBe(true);
        });

        it('hides the searched term when it does not exist', () => {
            wrapper.setState({ term: "" })
            expect(wrapper.find('.searched-term').exists()).toBe(false);
        });
    });

    describe('handleChange', () => {
        const evt = { target: { value: "new-value" } };
        let mockedSearch;

        beforeEach(() => {
            mockedSearch = jest.fn();
            wrapper.instance().seachTerm = mockedSearch;
        });

        it('sets the state with received term', () => {
            expect(wrapper.state().term).toEqual("");
            wrapper.instance().handleChange(evt);
            expect(wrapper.state().term).toEqual(evt.target.value);
        });

        it('calls `searchTerm`', () => {
            wrapper.instance().handleChange(evt);
            expect(mockedSearch).toHaveBeenCalledTimes(1);
        });
    });

    describe('seachTerm', () => {
        const books = { books: [Book1] };
        const wrapper = shallow(<SearchPage />);

        beforeEach(() => {
            fetch.mockResponseOnce(JSON.stringify(books))
            wrapper.setState({ term: "some term" });
        });

        it('calls books api', () => {
            wrapper.instance().seachTerm();
            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual("https://reactnd-books-api.udacity.com/search");
        });

        it('sets state with the response', () => {
            wrapper.instance().seachTerm();
            expect(wrapper.state().books).toEqual(books.books);
        });
    });
});
