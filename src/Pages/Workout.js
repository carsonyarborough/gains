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

            <form class="form-horizontal" action="/action_page.php">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="Reps">Reps:</label>
                    <div class="col-sm-10">
                        <input type="Reps" class="form-control" id="Reps" placeholder="Enter Reps"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="Weight">Weight:</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="Weight" placeholder="Enter Weight"></input>
                    </div>
                </div>
                <div class="form-group"></div>
                <button type="button" class="btn btn-outline-danger btn-lg btn-block">Next Set</button>
             
            </form>



            {/* <div class="input-group mb3">
                <div class="input-group-prepend">
                    
                    <label>Reps:</label>
                    <input type="text" class="form-control"></input>
                    <button type="button" class="btn btn-primary">save</button>
                </div>
            </div>
            <div class="input-group mb3">
                <div class="input-group-prepend">

                    <label>Weight:</label>
                    <input type="text" class="form-control"></input>
                    <button type="button" class="btn btn-info">save</button>
                </div>
            </div> */}

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
