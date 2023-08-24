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
        <form className='bg-info text-center'>
            <h1>
                Choose pre planned workout
            </h1>
            <br>
            </br>
            <br>
            </br>
            <button className="btn-lg btn-outline-dark btn mr-4" onClick={() => navigateToWorkout('Legs')}>
                Legs
            </button>
            <button className="btn-lg btn-outline-dark btn mr-4 " onClick={() => navigateToWorkout('Push')}>
                Push
            </button>

            {/* <a href="/home"><button class="btn-lg btn-outline-primary btn mr-4">
                Home
            </button></a> */}

            <button className="btn-lg btn-outline-dark btn mr-4" onClick={() => navigateToWorkout('Pull')}>
                Pull
            </button>
            <button className="btn-lg btn-outline-dark btn " onClick={() => navigateToWorkout('Core')}>
                Core
            </button>
        </form>
    </Fragment >;
}



export default Home;