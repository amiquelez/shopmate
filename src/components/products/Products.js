import React, {Component} from 'react';
import Product from './product/Product';
import './Products.scss';

class Products extends Component {
    state = {
        products: [],
        perPage: 8,
        page: 1,
        totalPages: null
    }
    componentWillMount() {
        this.loadProducts();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    }

    handleScroll = e => {
        const {scrolling, totalPages, page} = this.state;
        if(scrolling) return;
        if(totalPages <= page) return;
        const lastLi = document.querySelector('ul.list_products li:last-child');
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        const bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore();
    }

    loadProducts = () => {
        const {perPage, page, products} = this.state;
        const url = `https://backendapi.turing.com/products?page=${page}&limit=${perPage}`;
        fetch(url)
        .then( res => res.json())
        .then(data => this.setState({
            products: [...products, ...data.rows],
            scrolling: false,
            totalPages: Math.ceil(data.count / perPage)
        }))
    }

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: true
        }), this.loadProducts)
    }

    render (){
        const products = this.state.products.map(prod => {
            const description = `${prod.description.substring(0, 80)}${prod.description.length > 80 ? '...' : null}`;
            return <li key={prod.product_id}><Product image={require(`../../assets/images/product/${prod.thumbnail}`)} title={prod.name} description={description} price={prod.price} /></li>
        });
        return (
            <React.Fragment>
                <ul className="list_products">
                    {products}
                </ul>
            </React.Fragment>
        )
    }
};

export default Products;