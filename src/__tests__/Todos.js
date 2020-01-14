import React from "react";
import { mount } from "enzyme";
import { TodoProvider} from "../contexts/TodoContext";
import Todos from "../components/Todos";

it('Should render component', () => {
    const wrapper = mount(
        <TodoProvider dispatch={jest.fn()}>
          <Todos />
        </TodoProvider>
      );
    expect(wrapper.find('.App-header').exists()).toBeTruthy();
})