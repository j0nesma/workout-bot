import { WORKOUT_IN_PROGRESS_ERROR } from "../constants";

export class WorkoutInProgressError extends Error {
    constructor() {
        super("Workout is already in progress for this user");
        this.name = WORKOUT_IN_PROGRESS_ERROR;
    }
}