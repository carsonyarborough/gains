import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedWorkout } from '../workoutSelectors';

function Workout() {
    const selectedWorkout = useSelector(selectSelectedWorkout);
    console.log(selectedWorkout);
    return <Fragment>
        <h1> This is the Workout page</h1>
        <div>{selectedWorkout?.name}</div>
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
