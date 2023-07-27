import { createReducer } from "@reduxjs/toolkit"
import { legData } from "./Data/WorkoutData";
import { selectWorkout } from "./workoutActions";

export const workoutReducer = createReducer({ selectedWorkout: legData }, (builder) => {
    builder
        .addCase(selectWorkout, (state, action) => {
            state.selectedWorkout = action.payload.selectedWorkout;
        })
})
