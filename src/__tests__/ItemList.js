import React from "react";
import { useEffect } from "react";
import { mount } from "enzyme";
import ItemList from "../components/ItemList";
import { TodoProvider, useTodoContext } from "../contexts/TodoContext";

describe("Tests for Items component", () => {

  it("Should render Itemlist element", () => {
    const itemList = mount(
      <TodoProvider dispatch={jest.fn()}>
        <ItemList />
      </TodoProvider>
    );
    expect(itemList.find(".Item").exists()).toBeTruthy();
  });
});
