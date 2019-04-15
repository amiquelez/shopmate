const initialState = {
    filterCategory: '',
    searchTxt: '',
    department: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
       case 'FILTER_CATEGORY':
            return {
                filterCategory: action.val
            }
        case 'SEARCH_TXT':
            return {
                searchTxt: action.val
            }
        case 'FILTER_DEPARTMENT':
            return {
                department: action.val
            }
        default:
            return state;
    }
};

export default reducer;