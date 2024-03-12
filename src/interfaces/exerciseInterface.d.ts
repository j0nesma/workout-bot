export interface IExercise {
    title: string;
    type: string; //TODO: Make it constants
    sets: [{
        weight:number;
        reps: number;
    }]
}