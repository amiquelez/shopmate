import React, {Component} from 'react';
import Product from './product/Product';
import './Products.scss';

class Products extends Component {
    state = {
        products: null
    }
    componentDidMount() {
        fetch('https://backendapi.turing.com/products')
        .then( res => res.json())
        .then(data => this.setState({products: data.rows}))
    }
    render (){
        let result;
        if(this.state.product){
            result = <ul className="list_products">
                        {this.state.products.map( p => console.log(p))}
                            <li><Product image={require('../../assets/images/product/a-partridge-in-a-pear-tree.gif')} title="Camiseta" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price="4.25" /></li>
                    </ul>
        }else{
            console.log();
            result = 'loading...';
        }
        return result;
    }
};

export default Products;