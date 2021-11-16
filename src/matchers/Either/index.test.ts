import { Left, Right } from "purify-ts";
import * as matchers from "./";

expect.extend(matchers);

describe("Either", () => {
  const left = () => Left(new Error("Message"));
  const right = () => Right(1);

  it(".toBeLeft", () => {
    expect(left()).toBeLeft();
  });

  it(".not.toBeLeft", () => {
    expect(right()).not.toBeLeft();
  });

  it(".toBeRight", () => {
      expect(right()).toBeRight();
  });

  it(".not.toBeRight", () => {
      expect(left()).not.toBeRight();
  });
});
