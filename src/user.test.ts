import { WORKING_OUT } from "./constants";
import { beforeEach, describe, it, expect, test, vi } from "vitest";
import { getStatus, setStatus, users } from "./user";
import { Context, Telegram } from "telegraf";
import { IUser } from "./interfaces/userInterface";

describe("Users", () => {
  beforeEach(()=>{
    users.length = 0;
  }) 
  describe("getStatus", () => {
    it("should return a users state", () => {
      expect(getStatus(123)).toBeUndefined();
    })

    it("should return undefined if no state", () => {
      const user:IUser= {
        userId:123,
        status:"WORKING_OUT"
      }
      users.push(user);
      expect(getStatus(123)).toEqual(user);
    })
  });

  describe("setStatus", () => {
    it("should create a new state if no status is set", () => {  
      const status = "WORKING_OUT1";
      const userId = 123;

      expect(users.length).toEqual(0);

      setStatus(userId, status);
      
      expect(users.length).toEqual(1);
      expect(users.filter(state => state.userId === userId)[0]).toEqual({
        userId,
        status
      })
    })

    it("should update a state if user exists", () => {
      const status = "WORKING_OUT1";
      const userId = 123;
      const state:IUser = {
        userId:123,
        status:"WORKING_OUT"
      }
      users.push(state);

      expect(users.length).toEqual(1);

      setStatus(userId, status);
      
      expect(users.length).toEqual(1);
      expect(users.filter(state => state.userId === userId)[0]).toEqual({
        userId,
        status
      })

    })
  });
});