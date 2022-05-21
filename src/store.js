import { configureStore } from '@reduxjs/toolkit';
import { createSto}
//import { combineReducers } from 'redux';
import { slice } from './reducers/reducer'

/*const reducers = combineReducers({
    // will add here
})*/

const store = configureStore({
    reducer: slice.reducer
})

export default store;