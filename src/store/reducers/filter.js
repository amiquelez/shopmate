import * as actionTypes from '../actions/actionTypes';

const initialState = {
    filterCategory: '',
    searchTxt: '',
    department: null
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
        default:
            return state;
    }
};

export default reducer;