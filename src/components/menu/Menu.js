import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

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
            return <li key={cat.category_id}><NavLink to={{pathname: `/category/${cat.category_id}`}}>{cat.name}</NavLink></li>;
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

export default connect(mapStateToProps)(Menu);