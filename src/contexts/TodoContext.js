import React, { createContext, useReducer, useContext } from "react";

export const TodoContext = createContext();

// Initial state
const initialState = {
  dropDown: false,
  items: ["hej", "hejdå"]
};

// Actions
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CLEAR_ALL = "CLEAR_ALL";

// Action creators
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function clearAll() {
  return { type: CLEAR_ALL };
}

// Reducer
export function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        items: [...state.items, action.text]
      });
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(
          item => item !== state.items[action.index]
        )
      };
    case CLEAR_ALL:
      return {
        ...state,
        items:[]
      };
    default:
      return state.items;
  }
}

function TodoProvider(props) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const todoData = { state, dispatch };

  return <TodoContext.Provider value={todoData} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };
