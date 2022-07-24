import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    services: [],
    error: '',
    loading: 'idle',
    goodToGo: false,
    name: '',
    price: '',
    content: ''
  },
  reducers: {
    servicesLoading: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    servicesReceived: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.services = action.payload
      }
    },
    servicesError: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.goodToGo = false
        state.error = action.payload
      }
    },
    servicesRedirect: (state, action) => {
        state.goodToGo = action.payload
    },
    changeServiceState: (state, action) => {
      state.name = action.payload.name
      state.price = action.payload.price
      state.content = action.payload.content
    },
  }
});

export const { servicesLoading, servicesReceived, servicesError, servicesRedirect, changeServiceState } = tasksSlice.actions;

export default tasksSlice.reducer;
