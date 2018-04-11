import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '../../src/components/Header/Header';

let InitialData = {
    items: [1,2,3,4]
};

it('should render a document title and a parent title', () => {
    const wrapper = shallow(
        <Header items={InitialData} />
    );
    expect(wrapper).toMatchSnapshot();
    // Проверка на соответствие дитей в найденом елементе
    expect(wrapper.find('.logo').contains(<span>LOGO</span>)).toEqual(true);
    // Проверка на текст
    expect(wrapper.find('.logo').children().first().text()).toEqual("LOGO");
    // Проверка на  тип дочернего елемента
    expect(wrapper.find('.logo').childAt(0).type()).toEqual('span');
    // Проверка на существование
    expect(wrapper.find('.user_select').exists()).toEqual(true);
    // Проверка на пустоту
    expect(wrapper.find('.user_select').isEmpty()).toEqual(false);
    // Проверка изображения на урл ==
    expect(wrapper.find('.img_box').children().first().prop('src')).toEqual('111.png');
    // Указать стейт
    wrapper.setState({ url: '222.png' });
    // Еще одна проверка с указаной стейт
    expect(wrapper.find('.img_box').children().first().prop('src')).toEqual('222.png');
    // Проверка на тип дитей
    expect(wrapper.find('ul').childAt(0).type()).toEqual('li');
    // Проверка на количество дитей
    expect(wrapper.find('ul').children().length).toBe(InitialData.items.length);


    // expect(wrapper.find('img').prop('src').isEmpty()).toEqual(false);
});