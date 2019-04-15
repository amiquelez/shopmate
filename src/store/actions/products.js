import * as actionTypes from './actionTypes';

export const saveProducts = (res) => {
    return {
        type: actionTypes.LOAD_PRODUCTS,
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