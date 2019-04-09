import React, {Component} from 'react';
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
            return <li key={cat.category_id}>{cat.name}</li>;
        })
        return (
            <div className="categories_menu">
                <h3>Categories</h3>
                <ul>{categories}</ul>
            </div>
        )
    }
}

export default Menu;