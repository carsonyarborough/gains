import { React, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { legData, pullData, pushData, coreData } from '../Data/WorkoutData.js';
import { selectWorkout } from '../workoutActions.js';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function navigateToWorkout(workoutSelected) {
        var selectedWorkoutData;
        if (workoutSelected === 'Legs') {
            selectedWorkoutData = legData
        } else if (workoutSelected === 'Push') {
            selectedWorkoutData = pushData
        } else if (workoutSelected === 'Core') {
            selectedWorkoutData = coreData
        } else if (workoutSelected === 'Pull') {
            selectedWorkoutData = pullData
        }
    
        dispatch(selectWorkout({ selectedWorkoutTemplate: selectedWorkoutData }))
        navigate("/workout");
    }

    return <Fragment>
        <div className="App">
            <p className="My-Header">
                Choose pre planned workout
            </p>
            <button class="btn-lg btn-outline-dark btn" onClick={() => navigateToWorkout('Legs')}>
                Legs
            </button>
            <button class="btn-lg btn-outline-dark btn" onClick={() => navigateToWorkout('Push')}>
                Push
            </button>
            <a href="/home"><button class="btn-lg btn-outline-primary btn">
                Home
            </button></a>
            <button class="btn-lg btn-outline-dark btn" onClick={() => navigateToWorkout('Pull')}>
                Pull
            </button>
            <button class="btn-lg btn-outline-dark btn" onClick={() => navigateToWorkout('Core')}>
                Core
            </button>
        </div>
    </Fragment >;
}



export default Home;