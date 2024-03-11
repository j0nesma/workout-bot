export interface State {
    userId: number;
    status: string;
}
//TODO: make this a mongo collection.
export const states: State[] = []

export function setStatus(userId:number, status:string) {
    let stateIndex = states.map(e => e.userId).indexOf(userId);
    if(stateIndex >= 0) {
        states[stateIndex].status = status 
    } else {
        states.push({userId, status})
    }
}

export function getStatus(userId:number) {
    return states.filter(state => state.userId === userId)[0];
}