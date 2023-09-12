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
        addItem(state, action){
            state.push(action.payload);
        },
        addCount(state, action){
            let idx = state.findIndex((a)=>{ return a.id === action.payload })
            state[idx].count++;
        }
    }
})

export let { plusCount, addItem, addCount } = cart.actions;

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer,
    }
})