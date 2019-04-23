import productReducer from './product';

describe('Product Reducer', () => {

    it('Should return default state', () => {
        const newState = productReducer(undefined, {});
        expect(newState).toEqual({
            products: [],
            page: 1,
            perPage: 8,
            totalPages: null,
            scrolling: false
        });
    });

});