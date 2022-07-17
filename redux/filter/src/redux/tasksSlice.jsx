import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';

const fakeData = []
for (let i = 0; i < 16; i++) {
  fakeData.push({
    id: nanoid(),
    title: 	faker.hacker.phrase(),
    price: faker.datatype.number().toString(),
    status: ''
  })
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: fakeData,
    filterKey: null
  },
  reducers: {
    addAction: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        price: action.payload.price,
        status: action.payload.status
      }
      state.tasks.push(newTask);
    },
    deleteAction: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
    editAction: (state, action) => {
      state.tasks.forEach(item => {
        if(item.status === 'editing') {
          item.status = ''
        }
      })
      state.tasks.forEach(item => {
        if(item.id === action.payload.id) {
          item.status = 'editing'
        }
      })
    },
    changeAction: (state, action) => {
      const item = state.tasks.find(item => item.id === action.payload.editingId)
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
        state.tasks.push(newTask);
      }
    },
    filterAction: (state, action) => {
      state.filterKey = action.payload.keyword
    }
  }
});

export const {addAction, deleteAction, editAction, changeAction, filterAction} = tasksSlice.actions;

export default tasksSlice.reducer;
