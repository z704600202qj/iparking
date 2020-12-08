import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import File from '../File';

Enzyme.configure({ adapter: new Adapter() });

describe('File', () => {

  it('测试Alert组件的children渲染', () => {
    const wrapper = Enzyme.shallow(
      <File>this is alert</File>
    );
    expect(wrapper.contains('this is alert')).toBe(true);
  });

  it('测试Alert组件的DOM结构', () => {
    const wrapper = Enzyme.mount(
      <File>Hello</File>
    );
    expect(wrapper.html()).toBe('<div class="alert">Hello</div>');
  });
});
