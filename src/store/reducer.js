const initialState = {
    filterCategory: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
       case 'FILTER_CATEGORY':
            return {
                filterCategory: action.val
            }
        default:
            return state;
    }
};

export default reducer;