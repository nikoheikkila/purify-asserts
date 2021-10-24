import { Just, List, Maybe, Nothing } from "purify-ts";
import * as matchers from "./";

expect.extend(matchers);

describe("Maybe", () => {
  it(".toBeJust", () => {
    expect(Maybe.fromNullable(1)).toBeJust();
    expect(Just(1)).toBeJust();
  });

  it(".not.toBeJust", () => {
    expect(Nothing).not.toBeJust();
  });

  it(".toBeNothing", () => {
    expect(Maybe.fromNullable()).toBeNothing();
    expect(Nothing).toBeNothing();
    expect(List.head([])).toBeNothing();
  });

  it(".not.toBeNothing", () => {
    expect(Just(1)).not.toBeNothing();
    expect(List.head([1])).not.toBeNothing();
  });

  it(".toHaveJustValue", () => {
    expect(Just(1)).toHaveJustValue(1);
  });

  it(".not.toHaveJustValue", () => {
    expect(Just(2)).not.toHaveJustValue(1);
  });
});
