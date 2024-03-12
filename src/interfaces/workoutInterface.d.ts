import { IExercise } from "./exerciseInterface";

interface IWorkout {
    dateStarted: Date;
    exercises: IExercise[];
    tag:string;
}