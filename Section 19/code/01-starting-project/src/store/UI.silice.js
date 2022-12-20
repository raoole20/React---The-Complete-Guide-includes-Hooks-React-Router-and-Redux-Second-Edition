import { createSlice } from "@reduxjs/toolkit";

const init = { show: true }
const uiSlice = createSlice({
    name: 'ui',
    initialState: init,
    reducers: {
        toggle(state){
            state.show = !state.show
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice