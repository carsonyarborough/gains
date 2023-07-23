import { createReducer } from "@reduxjs/toolkit"


export const workoutReducer = createReducer([], (builder) => {
    builder
        .addCase('SELECT_WORKOUT', (state, action) => {
            console.log(state, action);
            state.push(action.payload)
        })
})
