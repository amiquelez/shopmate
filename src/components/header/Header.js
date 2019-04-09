import React, {Component} from 'react';
import './Header.css';
import SearchBar from '../search-bar/SearchBar';

class Header extends Component {
    
    state = {
        departments: []
    }

    componentWillMount(){
        fetch('https://backendapi.turing.com/departments')
        .then( res => res.json())
        .then(data => this.setState({departments: data}))
    }

    render(){
        const departments = this.state.departments.map(dep => {
            return <li key={dep.department_id}>{dep.name}</li>
        })
        return (
            <header>
                <h1>Shopmate</h1>
                <nav>
                    <ul>{departments}</ul>
                </nav>
                <SearchBar />
                <i className="fas fa-shopping-bag"></i>
            </header>
        )
    }
}

export default Header;