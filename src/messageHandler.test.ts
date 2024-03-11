import { WORKING_OUT } from "./constants";
import { beforeEach, describe, it, expect, test, vi } from "vitest";
import { handleMessage } from "./messageHandler";
import { Context, Telegram } from "telegraf";

describe("Message", () => {
  it("should return start workout text if you have no workout in progress", () => {
    const ctx = {
      from:{
        id:123
      },
      message: {
        text:"test"
      },
      reply: vi.fn()
    }
    
    handleMessage(ctx);

    expect(ctx.reply).toHaveBeenCalledTimes(1);
    expect(ctx.reply).toHaveBeenCalledWith("To start a workout do /workout");
  })
});