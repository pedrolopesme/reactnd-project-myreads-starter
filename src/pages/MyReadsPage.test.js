import React from 'react'
import MyReadsPage from './MyReadsPage'
import { shallow } from '../enzyme'
import { Book1 } from '../tests/fixtures'

describe('MyReadsPage', () => {
    const wrapper = shallow(<MyReadsPage />);

    beforeEach(() => {
        fetch.resetMocks();
    });

    describe('when rendered', () => {
        it('shows page title', () => {
            expect(wrapper.find('.list-books-title').exists()).toBe(true);
        });

        it('shows the shelves', () => {
            expect(wrapper.find('.list-books-content').exists()).toBe(true);
        });

        it('shows a link to create page', () => {
            expect(wrapper.find('.open-search').exists()).toBe(true);
        });
    });
});
