import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.scss';
import * as actionCreators from '../../store/actions/actions';

class Menu extends Component {
    
    state = {
        categories: []
    }

    componentWillMount() {
        this.loadCategories();
    }

    componentWillReceiveProps(){
        this.loadCategories();
    }

    loadCategories(){
        const filter = (this.props.department) ? `/inDepartment/${this.props.department}` : '';
        const url = `https://backendapi.turing.com/categories${filter}`;
        fetch(url)
        .then( res => res.json())
        .then(data => {
            const categories = data.rows ? data.rows : data;
            this.setState({categories: categories});
        })
    }

    render(){
        const categories = this.state.categories.map( cat => {
            return <li key={cat.category_id} onClick={() => this.props.onSelectCategory(cat.category_id)}>{cat.name}</li>;
        })
        return (
            <div className="categories_menu">
                <h3>Categories</h3>
                <ul>{categories}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        department: state.filter.department
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectCategory: (category) => dispatch(actionCreators.filterCategory(category))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);