import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './product/Product';
import './Products.scss';
import * as actionCreators from '../../store/actions/index';

class Products extends Component {
    state = {
        products: [],
        perPage: 8,
        totalPages: null,
        search: ''
    }
    componentWillMount() {
        this.loadProducts();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    }

    componentWillReceiveProps(){
        /*this.setState( prevState => ({
                products: []
        }), this.loadProducts)*/
       // this.loadProducts();
    }

    handleScroll = e => {
        const {scrolling, totalPages} = this.state;
        const page = this.props.page;
        if(scrolling) return;
        if(totalPages <= page) return;
        const lastLi = document.querySelector('ul.list_products li:last-child');
        if(!lastLi) return;
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        const bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore();
    }

    loadProducts = () => {
        const {perPage} = this.state
        const page = this.props.page;
        const filter = (this.props.cat) ? `/inCategory/${this.props.cat}` : '';
        const search = (this.props.search) ? `/search?query_string=${this.props.search}` : '';
        const url = `https://backendapi.turing.com/products${filter}${search}?page=${page}&limit=${perPage}`;
        this.props.onLoadProducts(url);
        
        /*fetch(url)
        .then( res => res.json())
        .then(data => this.setState({
            products: [...products, ...data.rows],
            scrolling: false,
            totalPages: Math.ceil(data.count / perPage)
        }))*/
    }

    loadMore = () => {
        const page = this.props.page;
        this.props.onSetPage(page + 1);
        this.setState({
            scrolling: true
        }, this.loadProducts)
    }

    render (){
        const prods = this.props.prod[0];
        if(!prods) return <ul></ul>;
        const products = prods.map(prod => {
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

const mapStateToProps = state => {
    return {
        cat: state.filter.filterCategory,
        search: state.filter.searchTxt,
        page: state.filter.page,
        prod: state.filter.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetPage: (page) => dispatch(actionCreators.setPage(page)),
        onLoadProducts: (url) => dispatch(actionCreators.loadProducts(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);