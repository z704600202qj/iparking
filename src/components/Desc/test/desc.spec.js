import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Desc from '../Desc'

Enzyme.configure({ adapter: new Adapter() });

describe('Desc', () => {

    it('测试Desc组件的渲染', () => {
        const wrapper = Enzyme.mount(
            <Desc>Hello</Desc>
        );
    });

})