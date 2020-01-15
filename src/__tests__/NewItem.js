import React from "react";
import { mount } from "enzyme";
import * as TodoContext from "../contexts/TodoContext";
import NewItem from "../components/NewItem";

describe("Test NewItem component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TodoContext.TodoProvider dispatch={jest.fn()}>
        <NewItem />
      </TodoContext.TodoProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it("should render NewItem component", () => {
    expect(wrapper.find(".ItemInput").exists()).toBeTruthy();
  });

  it("should call setState onClick", () => {
    const todoReducerSpy = jest.spyOn(TodoContext, "addTodo") 
    wrapper.find("input").simulate("change", {target: {name: "new-item", value: "Tvätta"}});
    wrapper.find("form").simulate("submit");
    expect(todoReducerSpy).toHaveBeenCalledWith("Tvätta");
  });
});
