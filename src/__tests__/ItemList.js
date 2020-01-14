import React from "react";
import { mount } from "enzyme";
import ItemList from "../components/ItemList";
import { TodoProvider, useTodoContext } from "../contexts/TodoContext";

describe("Tests for Items component", () => {

  it("Should render Itemlist element", () => {
    const wrapper = mount(
      <TodoProvider dispatch={jest.fn()}>
        <ItemList items={'cat'} />
      </TodoProvider>
    );
    expect(wrapper.find("Item").exists()).toBeTruthy();
    
  });

  it("Should render Itemlist element cat", () => {
    const wrapper = mount(
      <TodoProvider dispatch={jest.fn()}>
        <ItemList />
      </TodoProvider>
    );
    expect(wrapper.find("Item").at(1).text()).toContain('Implement todo provider');
    
  });
});
