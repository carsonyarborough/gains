import { createSelector } from "@reduxjs/toolkit";

export const selectSelectedWorkoutTemplate = createSelector(
    state => state.workout,
    workout => workout.selectedWorkoutTemplate
)

export const selectCurrentWorkout = createSelector(
    state => state.workout,
    workout => workout.currentWorkout
)


// workout => workout.selectedWorkout

// function workout() {
//     return workout.selectedWorkout;
// }

// {
//     state: {
//         workout: {
//             selectedWorkout: null
//         },
//     }
// }

// const demo = {
//     workout: 'blah'
// };