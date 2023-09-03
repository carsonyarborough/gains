import { createReducer, current } from "@reduxjs/toolkit"
import { legData } from "./Data/WorkoutData";
import { addSetToExercise, removeSetFromExercise, selectWorkout, saveWorkout } from "./workoutActions";

export const workoutReducer = createReducer({ selectedWorkoutTemplate: null, currentWorkout: null }, (builder) => {
    builder
        .addCase(selectWorkout, (state, action) => {
            // create current workout, set it to object literal
            const currentWorkout = {};
            currentWorkout.name = action.payload.selectedWorkoutTemplate.name;
            // sets the from template property on the current workout to the id of the selected workout template
            currentWorkout.fromTemplate = action.payload.selectedWorkoutTemplate.id;
            // sets the exercises property on the current workout to the exercises of the array of the template exercise
            currentWorkout.exercises = action.payload.selectedWorkoutTemplate.exercises.map((templateExercise) => {
                // sets workout exercise to an object literal 
                const workoutExercise = {};
                // accesses name of workout exercise and sets it to template exercise 
                workoutExercise.name = templateExercise;
                // accesses sets of workout exercsie and sets it equal to an array with its first entry of two properties.
                // two poperties being reps and weight both set to null because at the start of a workout there are no reps or weight
                workoutExercise.sets = [
                    { reps: null, weight: null }
                ];
                return workoutExercise;
            });
            state.currentWorkout = currentWorkout;
            state.selectedWorkoutTemplate = action.payload.selectedWorkoutTemplate;
        })
        .addCase(addSetToExercise, (state, action) => {
            // accesses the exercises and index that is selected and adds empty set to exercise 
            state.currentWorkout.exercises[action.payload.exerciseIndex].sets.push({ reps: null, weight: null });
        })
        .addCase(removeSetFromExercise, (state, action) => {

            state.currentWorkout.exercises[action.payload.exerciseIndex].sets.splice(action.payload.setIndex, 1);
        })
        .addCase(saveWorkout, (state, action) => {
            state.currentWorkout.exercises[action.payload.exerciseIndex].sets[action.payload.setIndex][action.payload.setProperty] = action.payload.newValue;
        })
})


// interface currentWorkout {
//     fromTemplate: String,
//     exercises: [
//         {
//             name: String,
//             sets: [
//                 {
//                     reps: Number,
//                     weight: Number
//                 }
//             ]
//         }
//     ]
// }

const legWorkout = {
    fromTemplate: 'basicLegs',
    exercises: [
        {
            name: 'Back Squat',
            sets: [
                {
                    reps: null,
                    weight: null
                }
            ]
        },

        {
            name: 'Romanian Deadlift',
            sets: [
                {
                    reps: null,
                    weight: null
                }
            ]
        },
        {
            name: 'Lunges',
            sets: [
                {
                    reps: null,
                    weight: null
                }
            ]
        },
        {
            name: 'Leg Extensions',
            sets: [
                {
                    reps: null,
                    weight: null
                }
            ]
        },
        {
            name: 'Leg Curls',
            sets: [
                {
                    reps: null,
                    weight: null
                }
            ]
        }
    ]
}