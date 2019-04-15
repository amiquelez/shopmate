import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    filterCategory: '',
    searchTxt: '',
    department: null,
    page: 1,
    scrolling: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
       case actionTypes.FILTER_CATEGORY:
            return {
                ...state,
                page: 1,
                filterCategory: action.val
            }
        case actionTypes.SEARCH_TXT:
            return {
                ...state,
                searchTxt: action.val
            }
        case actionTypes.FILTER_DEPARTMENT:
            return {
                ...state,
                department: action.val
            }
        case actionTypes.SET_PAGE:
            return {
                ...state,
                page: action.val
            }
        case actionTypes.LOAD_PRODUCTS:
            return {
                ...state,
                scrolling: false,
                products: [...state.products, action.result]
            }
        default:
            return state;
    }
};

export default reducer;