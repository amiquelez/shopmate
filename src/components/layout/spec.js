import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
import { findByTestAttr } from '../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Layout {...props} />);
    return component;
};

describe('Layout component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'test_container');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a content', () => {
        const wrapper = findByTestAttr(component, 'test_content');
        expect(wrapper.length).toBe(1);
    });

});