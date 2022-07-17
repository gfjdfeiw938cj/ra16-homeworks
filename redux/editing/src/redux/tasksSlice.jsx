import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addAction: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        price: action.payload.price,
        status: action.payload.status
      }
      state.push(newTask);
    },
    deleteAction: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editAction: (state, action) => {
      state.forEach(item => {
        if(item.status === 'editing') {
          item.status = ''
        }
      })
      state.forEach(item => {
        if(item.id === action.payload.id) {
          item.status = 'editing'
        }
      })
    },
    changeAction: (state, action) => {
      const item = state.find(item => item.id === action.payload.editingId)
      if(item) {
        item.title = action.payload.title
        item.price = action.payload.price
        item.status = ''
      } else {
        const newTask = {
          id: nanoid(),
          title: action.payload.title,
          price: action.payload.price,
          status: ''
        }
        state.push(newTask);
      }
    }
  }
});

export const {addAction, deleteAction, editAction, changeAction} = tasksSlice.actions;

export default tasksSlice.reducer;
