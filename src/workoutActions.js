import { createAction } from "@reduxjs/toolkit";

export const selectWorkout = createAction('SELECT_WORKOUT');

export const addSetToExercise = createAction('ADD_SET_TO_EXERCISE');

export const removeSetFromExercise = createAction('REMOVE_SET_FROM_EXERCISE');

export const saveWorkout = createAction ('SAVE_WORKOUT');