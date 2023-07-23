import React, { Fragment } from 'react';
import { legData, pullData, pushData, coreData } from '../Data/WorkoutData.js';


function Home() {
    return <Fragment>
        <div className="App">
            <p className="My-Header">
                Choose pre planned workout
            </p>
            <a href="/workout"><button onClick="navigateToWorkout('Legs')">
                Legs
            </button></a>
            <a href="/workout"><button onClick="navigateToWorkout('Push')">
                Push
            </button></a>
            <a href="/home"><button >
                Home
            </button></a>
            <a href="/workout"><button onClick="navigateToWorkout('Pull')">
                Pull
            </button></a>
            <a href="/workout"><button onClick="navigateToWorkout('Core')">
                Core
            </button></a>
        </div>
    </Fragment >;
}


function navigateToWorkout(workoutSelected) {
    var selectedWorkoutData;
    if (workoutSelected === 'Legs') {
        selectedWorkoutData = legData
    } else if (workoutSelected === 'Push') {
        selectedWorkoutData = pushData
    } else if (workoutSelected === 'Core') {
        selectedWorkoutData = coreData
    } else if (workoutSelected === 'Pull'); {
        selectedWorkoutData = pullData
    }
  
}
export default Home;