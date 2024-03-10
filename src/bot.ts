import { Telegraf } from "telegraf";
import { workout, stop } from "./commands";
import {
  FIRST_NAME,
  WORKOUT_IN_PROGRESS_ERROR,
  WORKOUT_IN_PROGRESS_ERROR_REPLY,
} from "./constants";
import { logger } from "./logger";
import { Message } from "@telegraf/types";
import dotenv from 'dotenv'; 

dotenv.config()
const bot = new Telegraf(process.env.BOT_API_TOKEN!);

bot.start((ctx) => ctx.reply("Welcome! To start a workout use /workout"));

bot.command("workout", (ctx) => {
  const userId = ctx?.from.id;
  const firstName = ctx?.from.first_name;
  try {
    workout(userId);
    ctx.reply(`Hi ${firstName}, Let's start a workout!`);
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === WORKOUT_IN_PROGRESS_ERROR) {
        ctx.reply(
          WORKOUT_IN_PROGRESS_ERROR_REPLY.replace(FIRST_NAME, firstName)
        );
      } else {
        throw err;
      }
    }
  }
});

bot.command("add_exercise", (ctx) => {});

bot.command("stop", (ctx) => {
  const userId = ctx?.from.id;
  const firstName = ctx?.from.first_name;
  stop(userId);
  ctx.reply(`Hi ${firstName}, I have stopped your workout for you`);
});

bot.on("message", async (ctx) => {
  ctx.reply(`Your answer was: ${(ctx.message as Message.TextMessage)!.text!}`);
});

bot.launch({
  allowedUpdates: ["message", "callback_query"],
});


logger.info("Bot started...");

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
