import { current } from '@reduxjs/toolkit';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSetToExercise, removeSetFromExercise } from '../workoutActions';
import { selectCurrentWorkout } from '../workoutSelectors';

function Workout() {
    const currentWorkout = useSelector(selectCurrentWorkout);
    const dispatch = useDispatch();


    function addSet(exerciseIndex) {
        dispatch(addSetToExercise({ exerciseIndex: exerciseIndex }))
    }

    function removeSet(exerciseIndex) {
        console.log('hey')
        dispatch(removeSetFromExercise({ exerciseIndex: exerciseIndex }))
    }
    const exercises = currentWorkout.exercises.map(
        (exercise, exerciseIndex) => <Fragment>

            <h3 key={exercise.name}>{exercise.name}</h3>



            <form className="form-inline">
                <div className="container">
                    {exercise.sets.map(function (set, setIndex) {
                        return <div className="row">
                            <div className="col-sm">
                                <input type="text" className="form-control form-control-lg" placeholder="Reps"></input>
                            </div>
                            <div className="col-sm">
                                <input type="text" className="form-control form-control-lg" placeholder="Weight"></input>
                            </div>
                            <button className="col-sm" onClick={() => removeSet(exerciseIndex)} type="button" className="btn btn-outline-dark btn">Remove Set</button>
                        </div>
                    })}
                </div>

                <button onClick={() => addSet(exerciseIndex)} type="button" className="btn btn-outline-primary btn-lg btn-block">Add Set</button>



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
