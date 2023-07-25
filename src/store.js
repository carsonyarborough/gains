import { configureStore } from '@reduxjs/toolkit';
import { workoutReducer } from './workoutReducer';

const configuration = {
    reducer: {
        workout: workoutReducer
    },
    devTools: true
};

const store = configureStore(configuration);

export default store;