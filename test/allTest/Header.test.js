import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '../../src/components/Header/Header';

it('should render a document title and a parent title', () => {
    const wrapper = shallow(
        <Header />
    );
    expect(wrapper).toMatchSnapshot();
    // Проверка на соответствие дитей в найденом елементе
    expect(wrapper.find('.logo').contains(<span>LOGO</span>)).toEqual(true);

});