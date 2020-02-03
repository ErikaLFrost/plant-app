import React, { createContext, useReducer, useContext } from "react";

export const TodoContext = createContext();

const getInitialState = () => {
  try {
    const state = localStorage.getItem('my-state');
    if(state === null) {
      return {items: []};
    }
    return JSON.parse(localStorage.getItem("my-state"));
  } catch (err) {
    return {
      items:[]
    };
  }
};

console.log(getInitialState());

// Actions
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CLEAR_ALL = "CLEAR_ALL";

// Action creators
export function addTodo(plantName, plantType) {
  return { type: ADD_TODO, item: {name: plantName, plantType: plantType,}};
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
      return {...state,
        items: [
          ...state.items,
            action.item
        ]
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(item => item !== state.items[action.index])
      };
    case CLEAR_ALL:
      return {
        ...state,
        items: []
      };
    default:
      return state.items;
  }
}

const withLocalStorageCache = todoReducer => {
  return (state, action) => {
    const newState = todoReducer(state, action);
    localStorage.setItem("my-state", JSON.stringify(newState));
    return newState;
  };
};

function TodoProvider(props) {
  const [state, dispatch] = useReducer(withLocalStorageCache(todoReducer), getInitialState());

  const todoData = { state, dispatch };

  return <TodoContext.Provider value={todoData} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };
