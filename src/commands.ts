import { logger } from "./logger";
import { WORKING_OUT } from "./constants";
import { WorkoutInProgressError } from "./errors/WorkoutInProgressError";

interface Workout {
    name: string;
    weight: number;
    reps: number;
}

interface WorkoutSession {
    userId: number;
    exercises: Workout[];
    status: string;
} 

export const workoutSessions: WorkoutSession[] = [];

export function workout(userId:number) {
    if(getWorkoutSessionForUser(userId).length > 0) {
        throw new WorkoutInProgressError();
    }
    workoutSessions.push({
        userId,
        exercises:[],
        status:WORKING_OUT
    })
} 

export function stop(userId:number) {
    const session = getWorkoutSessionForUser(userId);
    if (session.length === 0 || session.length > 1) {
        logger.info(`No Workout found for user - ${userId}`);
        return [];
    }

    return session[0].exercises;
}

function getWorkoutSessionForUser(userId:number) {
    return workoutSessions.filter((workout) => workout.userId === userId);
}