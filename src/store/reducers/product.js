import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    page: 1,
    perPage: 8,
    totalPages: null,
    scrolling: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_PAGE:
            return {
                ...state,
                page: action.val
            }
        case actionTypes.SET_SCROLLING:
            return {
                ...state,
                scrolling: action.val
            }
        case actionTypes.LOAD_PRODUCTS:
            return {
                ...state,
                scrolling: false,
                products: [...state.products, ...action.result],
                totalPages: Math.ceil(action.totalProds / state.perPage)
            }
        case actionTypes.RESET_PRODUCTS:
            return {
                ...state,
                products: []
            }
        default:
            return state;
    }
};

export default reducer;