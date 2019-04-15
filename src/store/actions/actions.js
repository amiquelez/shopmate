export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const SEARCH_TXT = 'SEARCH_TXT';
export const FILTER_DEPARTMENT = 'FILTER_DEPARTMENT';
export const SET_PAGE = 'SET_PAGE';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const filterCategory = (cat) => {
    return {
        type: FILTER_CATEGORY,
        val: cat
    }
};

export const searchTxt = (txt) => {
    return {
        type: SEARCH_TXT,
        val: txt
    }
};

export const filterDepartment = (dep) => {
    return {
        type: FILTER_DEPARTMENT,
        val: dep
    }
};

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        val: page
    }
};

export const saveProducts = (res) => {
    return {
        type: LOAD_PRODUCTS,
        result: res
    }
};

export const loadProducts = (url) => {
    return dispatch => {
        fetch(url)
        .then(res => res.json())
        .then(data => dispatch(saveProducts(data.rows)))
    }
};