import { stop, workout, workoutSessions} from "./commands";
import { WORKING_OUT } from "./constants";
import { beforeEach, describe, expect, test } from "vitest";

describe("Commands", () => {
  beforeEach(() => {
    workoutSessions.length = 0;
  });

  describe("Workout", () => {
    test("Should set a new user to a workout status", () => {
      const userID = 123;
      const expected = {
        userId: userID,
        exercises: [],
        status: WORKING_OUT,
      };

      workout(userID);

      expect(workoutSessions).to.exist;
      expect(workoutSessions.length === 1);
      expect(workoutSessions[0]).toEqual(expected);
    });

    test("Should error a user who is in a WORKOUT state if they call this command", () => {
      expect(workoutSessions.length).toEqual(0);
      const userID = 123;
      expect(() => workout(userID)).not.toThrowError(
        /^Workout is already in progress for this user$/
      );
      expect(() => workout(userID)).toThrowError(
        /^Workout is already in progress for this user$/
      );
    });
  });

  describe("stop", () => {
    test("Should return a empty array if no workout found", () => {
      expect(stop(123)).toEqual([]);
    });

    test("Should return workout of a user and remove from active session", () => {
        const userId = 1233;
        const exercise= [{
            name: "Some exercise",
            weight: 10,
            reps: 10 
        }];
        
        workoutSessions.push({
            userId,
            exercises: exercise,
            status: WORKING_OUT
        });

        
        expect(stop(userId)).toEqual(exercise);


    })
  });
});
