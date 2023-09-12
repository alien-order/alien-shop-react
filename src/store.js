import { configureStore, createSlice } from "@reduxjs/toolkit";
import user  from './store/userSlice.js';

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1},
    ],
    reducers : {
        plusCount(state, action){
            state[action.payload].count += 1;
        },
        addCart(state, action){
            let addItem = {id : state.length, name : action.payload.title, count : 1};
            state.push(addItem);
        },
        addCount(state, action){
            state[action.payload].count++;
        }
    }
})

export let { plusCount, addCart, addCount } = cart.actions;

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer,
    }
})