import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, shwoCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, actions) {
      state.counter += actions.payload;
    },
    toggle(state) {
      state.shwoCounter = !state.shwoCounter;
    },
  },
});


const authSelice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false },
    reducers: {
        login(state){
            console.log('holi')
            state.isAuthenticated = true
        },
        logout(state){
            console.log('holi')
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSelice.reducer 
    }
});

export const actionsCounter = counterSlice.actions;
export const actionsAuth = authSelice.actions

export default store

