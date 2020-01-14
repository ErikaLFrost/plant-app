import React from "react";
import { mount } from "enzyme";
import App from "../App";

it('Should render App component', () => {
    const wrapper = mount(
          <App />
      );
    expect(wrapper.find('.App').exists()).toBeTruthy();
})