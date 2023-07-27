import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedWorkout } from '../workoutSelectors';
import { legData, pullData, pushData, coreData } from '../Data/WorkoutData.js';

function Workout() {
    const selectedWorkout = useSelector(selectSelectedWorkout);
    console.log(selectedWorkout.exercises);

    const exercises = selectedWorkout.exercises.map(
        (exercise) => <Fragment>
            <h3 key={exercise}>{exercise}</h3>
            <form>
                <div class="form-group">
                    <label>Reps:</label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="form-group">
                    <label>Weight:</label>
                    <input type="text" class="form-control"></input>
                </div>
            </form>

        </Fragment>
    )
    return <Fragment>
        <h1>This is the Workout page!!!</h1>
        <h2>{selectedWorkout.name}</h2>
        <div>
            {exercises}

        </div>

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
