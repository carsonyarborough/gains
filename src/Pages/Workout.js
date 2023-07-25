import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedWorkout } from '../workoutSelectors';
import { legData, pullData, pushData, coreData } from '../Data/WorkoutData.js';

function Workout() {
    const selectedWorkout = useSelector(selectSelectedWorkout);
    console.log(selectedWorkout.exercises);

    const exercises = selectedWorkout.exercises.map(
        (exercise) => <li key={exercise}>{exercise}</li>
    )
    return <Fragment>
        <h1> This is the Workout page!!!</h1>
        <div>{selectedWorkout.name}</div>
        <ul>
            {exercises}
        </ul>
    </Fragment>
}

export default Workout;


// const LegWorkout = [
//     'Back Squat',
//     'Romanian Deadlift',
//     'Lunges',
//     'Leg Extensions',
//     'Leg Curls'
// ];

// export function List() {
//     const listItems = LegWorkout.map(workout =>
//         <li>{workout}</li>
//     );
//     return <ul>{listItems}</ul>;
// }
