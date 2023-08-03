import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedWorkout } from '../workoutSelectors';
import { legData, pullData, pushData, coreData } from '../Data/WorkoutData.js';

function Workout() {
    const selectedWorkout = useSelector(selectSelectedWorkout);
    console.log(selectedWorkout.exercises);

    const exercises = selectedWorkout.exercises.map(
        (exercise) => <Fragment>
            <h3 key={exercise}>{exercise} </h3>
            {/* <div class="input-group mb3">
                <div class="input-group-prepend">
               
                    {/* <div class="input-group-text" type="checkbox" >
                        <input type="checkbox" class="form-control"></input>
                        
                    </div> */}
                    {/* <label>Reps:</label>
                    <input type="text" class="form-control"></input>
                    <button type="button" class="btn btn-primary">save</button>
                </div>
            </div> */}
            <div class="input-group mb3">
                <div class="input-group-prepend">
                    {/* <div class="input-group-text" type="checkbox" >
                        <input type="checkbox" class="form-control"></input>
                    </div> */}
                    <label>Weight:</label>
                    <input type="text" class="form-control"></input>
                    <button type="button" class="btn btn-info">save</button>
                </div>
            </div>

        </Fragment >
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
