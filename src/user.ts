import { IUser } from "./interfaces/userInterface";

//TODO: make this a mongo collection.
export const users: IUser[] = []

export function setStatus(userId:number, status:string) {
    let stateIndex = users.map(e => e.userId).indexOf(userId);
    if(stateIndex >= 0) {
        users[stateIndex].status = status 
    } else {
        users.push({userId, status})
    }
}

export function getStatus(userId:number) {
    return users.filter(state => state.userId === userId)[0];
}