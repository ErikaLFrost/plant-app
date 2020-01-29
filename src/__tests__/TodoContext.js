import React from "react";
import * as TodoContext from "../contexts/TodoContext";

xdescribe("Test context with state, actions and reducer", () => {
  const initialItems = [ "Träna", "Bada", "Klappa katt" ]

  it("Should call action addTodo with item", () => {
    const item = "pet cat";
    const spy = jest.spyOn(TodoContext, "addTodo");
    TodoContext.addTodo(item);
    expect(spy).toHaveBeenCalledWith(item);
  });

  it("Should call action removeTodo with index", () => {
    const index = 1;
    const spy = jest.spyOn(TodoContext, "removeTodo");
    TodoContext.removeTodo(index);
    expect(spy).toHaveBeenCalledWith(index);
  });

  it("Should call action function removeAll", () => {
    const spy = jest.spyOn(TodoContext, "clearAll");
    TodoContext.clearAll();
    expect(spy).toHaveBeenCalled();
  });
  
  it("Should call reducer case ADD_TODO", () => {
    const action = { "type": "ADD_TODO", "text": "Klappa hund" };
    expect(TodoContext.todoReducer(initialItems, action)).toContain("Klappa hund")
  });

  it("Should call reducer case REMOVE_TODO", () => {
    const action = { "type": "REMOVE_TODO", "index": 1 };
    expect(TodoContext.todoReducer(initialItems, action)).toHaveLength(2);
  });

  it("Should call reducer case CLEAR_ALL", () => {
    const action = { "type": "CLEAR_ALL" };
    expect(TodoContext.todoReducer(initialItems, action)).toHaveLength(0);
  });

});
