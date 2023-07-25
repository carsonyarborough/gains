import { createReducer } from "@reduxjs/toolkit"
import { selectWorkout } from "./workoutActions";

export const workoutReducer = createReducer({ selectedWorkout: null }, (builder) => {
    builder
        .addCase(selectWorkout, (state, action) => {
            state.selectedWorkout = action.payload.selectedWorkout;
        })
})
