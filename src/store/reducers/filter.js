import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchTxt: '',
    department: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
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