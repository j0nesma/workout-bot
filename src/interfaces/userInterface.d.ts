import { IWorkout } from "./workoutInterface";

export interface IUser {
    userId: number;
    status: string;
    workouts?: IWorkout[];
}

// What to do about time it sucks
// How to do super sets and circuits
const exampleJSON = {
    userid: 13432421,
    status: "WORKING_OUT || IDLE",
    preferences: {
        weight:"KG",
        distance:"KM",
        time: "minutes"
    },
    workouts: [{
        dateStarted: "DATE",
        exercises: [
            {
                title: "SOME EXERCISE NAME",
                type: "REPS || DISTANCE || CIRCUIT || SUPERSET(?)",
                set: [{
                    weight:10,
                    reps: 10
                }],
                distance: 10,
                time:60
            }
        ]
    }]
}