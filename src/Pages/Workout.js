import { current } from '@reduxjs/toolkit';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSetToExercise } from '../workoutActions';
import { selectCurrentWorkout } from '../workoutSelectors';

function Workout() {
    const currentWorkout = useSelector(selectCurrentWorkout);
    const dispatch = useDispatch();

    function addSet(exerciseIndex) {
        dispatch(addSetToExercise({ exerciseIndex: exerciseIndex }))
    }

    const exercises = currentWorkout.exercises.map(
        (exercise, exerciseIndex) => <Fragment>
            <h3 key={exercise.name}>{exercise.name}</h3>

            <form class="form-horizontal">
                {exercise.sets.map(function (set, setIndex) {
                    return <Fragment>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="Reps">Reps:</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" placeholder="Enter Reps"></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="Weight">Weight:</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" placeholder="Enter Weight"></input>
                            </div>
                        </div>
                    </Fragment>
                })}

                <button onClick={() => addSet(exerciseIndex)} type="button" class="btn btn-outline-danger btn-lg btn-block">Add Set</button>

            </form>
        </Fragment >
    )
    return <Fragment>
        <h1>This is the Workout page!!!</h1>
        <h2>{currentWorkout.name}</h2>
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
