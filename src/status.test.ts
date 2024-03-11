import { WORKING_OUT } from "./constants";
import { beforeEach, describe, it, expect, test, vi } from "vitest";
import { State, getStatus, setStatus, states } from "./status";
import { Context, Telegram } from "telegraf";

describe("Status", () => {
  beforeEach(()=>{
    states.length = 0;
  }) 
  describe("getStatus", () => {
    it("should return a users state", () => {
      expect(getStatus(123)).toBeUndefined();
    })

    it("should return undefined if no state", () => {
      const state:State = {
        userId:123,
        status:"WORKING_OUT"
      }
      states.push(state);
      expect(getStatus(123)).toEqual(state);
    })
  });

  describe("setStatus", () => {
    it("should create a new state if no status is set", () => {  
      const status = "WORKING_OUT1";
      const userId = 123;

      expect(states.length).toEqual(0);

      setStatus(userId, status);
      
      expect(states.length).toEqual(1);
      expect(states.filter(state => state.userId === userId)[0]).toEqual({
        userId,
        status
      })
    })

    it("should update a state if user exists", () => {
      const status = "WORKING_OUT1";
      const userId = 123;
      const state:State = {
        userId:123,
        status:"WORKING_OUT"
      }
      states.push(state);

      expect(states.length).toEqual(1);

      setStatus(userId, status);
      
      expect(states.length).toEqual(1);
      expect(states.filter(state => state.userId === userId)[0]).toEqual({
        userId,
        status
      })

    })
  });
});