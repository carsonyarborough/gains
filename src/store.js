import { configureStore } from '@reduxjs/toolkit';
import { workoutReducer } from './workoutReducer';

const configuration = {
    reducer: {
        workout: workoutReducer
    },
    preloadedState: {
        workout: {
            currentWorkout: null
        }
    },
    devTools: true
};

const store = configureStore(configuration);
console.log(store.getState());

export default store;