import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './product/Product';
import './Products.scss';
import * as actionCreators from '../../store/actions/index';

class Products extends Component {
    
    state = {
        category: null
    }

    componentWillMount() {
        this.loadProducts();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    }

    componentDidUpdate() {
        const catId = this.props.match.params.catId;
        if( catId && this.state.category !== catId ){
            this.setState({category: catId});
            this.props.onSetPage(1);
            this.props.resetProducts();
            this.loadProducts();
        }
    }

    handleScroll = e => {
        const page = this.props.page;
        if(this.props.scrolling) return;
        if(this.props.totalPages <= page) return;
        const lastLi = document.querySelector('ul.list_products li:last-child');
        if(!lastLi) return;
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        const bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore();
    }

    loadProducts = () => {
        const cat = this.props.match.params.catId;
        const page = this.props.page;
        const filter = cat ? `/inCategory/${cat}` : '';
        const search = (this.props.search) ? `/search?query_string=${this.props.search}` : '';
        const url = `https://backendapi.turing.com/products${filter}${search}?page=${page}&limit=${this.props.perPage}`;
        console.log(url)
        this.props.onLoadProducts(url);
    }

    loadMore = () => {
        const page = this.props.page;
        this.props.onSetPage(page + 1);
        this.props.onSetScrolling(true);
        this.loadProducts();
    }

    render (){
        const prods = this.props.prod;
        if(!prods) return <ul></ul>;
        const products = prods.map(prod => {
            const description = `${prod.description.substring(0, 80)}${prod.description.length > 80 ? '...' : null}`;
            return <li key={prod.product_id+Math.random()}><Product image={require(`../../assets/images/product/${prod.thumbnail}`)} title={prod.name} description={description} price={prod.price} /></li>
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
        search: state.filter.searchTxt,
        page: state.product.page,
        prod: state.product.products,
        totalPages: state.product.totalPages,
        perPage: state.product.perPage,
        scrolling: state.product.scrolling
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetPage: (page) => dispatch(actionCreators.setPage(page)),
        onSetScrolling: (scroll) => dispatch(actionCreators.setScrolling(scroll)),
        onLoadProducts: (url) => dispatch(actionCreators.loadProducts(url)),
        resetProducts: () => dispatch(actionCreators.resetProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);