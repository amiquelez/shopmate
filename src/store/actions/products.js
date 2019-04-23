import * as actionTypes from './actionTypes';

export const saveProducts = (res, count) => {
    return {
        type: actionTypes.LOAD_PRODUCTS,
        result: res,
        totalProds: count
    }
};

export const loadProducts = (url) => {
    return dispatch => {
        fetch(url)
        .then(res => res.json())
        .then(data => dispatch(saveProducts(data.rows, data.count)))
    }
};

export const resetProducts = () => {
    return{
        type: actionTypes.RESET_PRODUCTS
    }
}

export const setScrolling = (scroll) => {
    return {
        type: actionTypes.SET_SCROLLING,
        val: scroll
    }
}