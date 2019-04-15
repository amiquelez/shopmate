import React from 'react';
import './SearchBar.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

const SearchBar = props => {
    return (
        <input type="search" name="search" onChange={e => props.onSearch(e.target.value)}></input>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (txt) => dispatch(actionCreators.searchTxt(txt))
    };
}

export default connect(null, mapDispatchToProps)(SearchBar);