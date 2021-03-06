import * as actionTypes from './actionTypes';

export const searchTxt = (txt) => {
    return {
        type: actionTypes.SEARCH_TXT,
        val: txt
    }
};

export const filterDepartment = (dep) => {
    return {
        type: actionTypes.FILTER_DEPARTMENT,
        val: dep
    }
};

export const setPage = (page) => {
    return {
        type: actionTypes.SET_PAGE,
        val: page
    }
};