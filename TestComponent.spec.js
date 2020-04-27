import { mount } from '@vue/test-utils';
import TestComponent from './TestComponent.vue';

describe('TestComponent - mounting and Vue instance testing.', () => {
  test('Testing whether "TestComponent" is a Vue instance', () => {
    const wrapper = mount(TestComponent);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
