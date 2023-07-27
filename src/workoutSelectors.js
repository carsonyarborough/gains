import { createSelector } from "@reduxjs/toolkit";

export const selectSelectedWorkout = createSelector(
    state => state.workout,
    workout => workout.selectedWorkout
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