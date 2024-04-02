import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './reducers/toDoReducer';

const store = configureStore({
    reducer: toDoReducer,
});

export default store;