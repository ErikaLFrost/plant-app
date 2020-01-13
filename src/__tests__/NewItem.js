import React from "react";
import { useEffect } from "react";
import { mount } from "enzyme";
import { TodoProvider, useTodoContext } from "../contexts/TodoContext";
import NewItem from "../components/NewItem";

it("should render NewItem element", () => {
    const newItem = mount(
      <TodoProvider dispatch={jest.fn()}>
        <NewItem />
      </TodoProvider>
    );
    expect(newItem.find(".ItemInput").exists()).toBeTruthy();
  });