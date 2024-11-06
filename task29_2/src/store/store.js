import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { items: [] },
  reducers: {
    addTodo(state, action) {
      const newTodo = { description: action.payload, completed: false };
      state.items.push(newTodo);
      console.log(newTodo);
    },
    removeTodo(state, action) {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export default store;
