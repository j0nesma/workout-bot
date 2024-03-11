// This will handle any messages from the user that isnt a command

import { Message } from "@telegraf/types";
import { getStatus } from "./status";
import { WORKING_OUT } from "./constants";



export function handleMessage(ctx: any) {
    if(ctx.message) {
        const msg  = ctx.message as Message.TextMessage;
        if(msg.text) {
            const userId = ctx?.from.id;
            const status = getStatus(userId);
            if(!status || status.status !== WORKING_OUT) {
                ctx.reply(`To start a workout do /workout`);
            } else {
                ctx.reply(`Your answer was: ${msg.text!}`);    
            }
        }
        
    }
    
}