import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.scss';

class Menu extends Component {
    
    state = {
        categories: []
    }

    componentWillMount() {
        fetch('https://backendapi.turing.com/categories')
        .then( res => res.json())
        .then(data => this.setState({categories: data.rows}))
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

const mapDispatchToProps = dispatch => {
    return {
        onSelectCategory: (category) => dispatch({type: 'FILTER_CATEGORY', val: category})
    };
}

export default connect(null, mapDispatchToProps)(Menu);