import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';
import { findByTestAttr, checkProps } from '../../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Product {...props} />);
    return component;
};

describe('Product Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
        
            const expectedProps = {
                image: 'data:image/gif;base64,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',
                title: 'Chartres Cathedral', 
                description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals', 
                price: 16.95
            };
            const propsErr = checkProps(Product, expectedProps);
            expect(propsErr).toBeUndefined();

        });

    });
    
    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                image: 'data:image/gif;base64,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',
                title: 'Chartres Cathedral', 
                description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals', 
                price: 16.95
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'singleProduct');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const component = findByTestAttr(wrapper, 'titleProduct');
            expect(component.length).toBe(1);
        });

        it('Should render an image', () => {
            const component = findByTestAttr(wrapper, 'imageProduct');
            expect(component.length).toBe(1);
        });

        it('Should render a description', () => {
            const component = findByTestAttr(wrapper, 'descriptionProduct');
            expect(component.length).toBe(1);
        });

        it('Should render a price', () => {
            const component = findByTestAttr(wrapper, 'priceProduct');
            expect(component.length).toBe(1);
        });

    });

    describe('Have No props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'singleProduct');
            expect(component.length).toBe(0);
        });

    });

});