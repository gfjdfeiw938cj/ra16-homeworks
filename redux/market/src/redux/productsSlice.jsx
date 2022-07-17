import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';

const fakeData = []
const tags = []
for (let i = 0; i < 5; i++) {
  tags.push(faker.random.word())
}
for (let i = 0; i < 40; i++) {
  fakeData.push({
    id: nanoid(),
    title: 	faker.commerce.productName(),
    image: faker.image.abstract(300, 300, true),
    price: faker.commerce.price(2000, 5000, 0),
    specialPrice: faker.commerce.price(1000, 2000, 0),
    description: faker.commerce.productDescription(),
    category: faker.random.word(),
    tags: tags,
    status: ''
  })
}

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: fakeData,
    filterKey: null
  },
  reducers: {
    addAction: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        image: faker.image.abstract(300, 300, true),
        price: action.payload.price,
        specialPrice: action.payload.specialPrice,
        description: action.payload.description,
        material: action.payload.material,
        category: action.payload.category,
        tags: action.payload.tags,
        status: action.payload.status
      }
      state.products.push(newTask);
    },
    filterAction: (state, action) => {
      state.filterKey = action.payload.keyword
    }
  }
});

export const {addAction, filterAction} = productsSlice.actions;

export default productsSlice.reducer;
