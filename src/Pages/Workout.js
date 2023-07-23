import React, { Fragment } from 'react';

function Workout() {
    return <Fragment><h1> This is the Workout page</h1>
        <h2>Back Squat</h2>
        <h2>Romanian Deadlift</h2>
        <h2>Lunges</h2>
        <h2>Leg Extensions</h2>
        <h2>Leg Curls</h2></Fragment>
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
