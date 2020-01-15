import React from "react";
import { mount } from "enzyme";
import ItemList from "../components/ItemList";
import * as TodoContext from "../contexts/TodoContext";

describe("Tests for ItemList component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <TodoContext.TodoProvider dispatch={jest.fn()}>
        <ItemList />
      </TodoContext.TodoProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render Itemlist element", () => {
    expect(wrapper.find("Item").exists()).toBeTruthy();
  });

  it("Should render Itemlist element Implement todo provider", () => {
    expect(
      wrapper
        .find("Item")
        .at(1)
        .text()
    ).toContain("Implement todo provider");
  });
});
