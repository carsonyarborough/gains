import { createSelector } from "@reduxjs/toolkit";

export const selectSelectedWorkout = createSelector(
    state => state.workout,
    workout => workout.selectedWorkout
)