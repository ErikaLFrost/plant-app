import React from "react";
import { mount } from "enzyme";
import { NewItem } from "../components/Items";
import { TodoProvider, useTodoContext } from "../contexts/TodoContext";

describe("Test items component", () => {
  it("test", () => {
    const newItem = mount(
      <TodoProvider dispatch={jest.fn()}>
        <NewItem />
      </TodoProvider>
    );
    expect(newItem.find('.Item').exists()).toBeTruthy();
  });
});
