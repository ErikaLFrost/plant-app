import React from "react";
import * as TodoContext from "../contexts/TodoContext";

describe("Test context with state and actions", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);

  it("Should call addTodo with item", () => {
    const item = "pet cat";
    const spy = jest.spyOn(TodoContext, "addTodo");
    TodoContext.addTodo(item);
    expect(spy).toHaveBeenCalledWith(item);
  });

  it("Should call removeTodo with index", () => {
    const index = 1;
    const spy = jest.spyOn(TodoContext, "removeTodo");
    TodoContext.removeTodo(index);
    expect(spy).toHaveBeenCalledWith(index);
  });

  it("Should call function removeAll", () => {
    const spy = jest.spyOn(TodoContext, "clearAll");
    TodoContext.clearAll();
    expect(spy).toHaveBeenCalled();
  });
});
