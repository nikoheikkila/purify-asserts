import { Left, Right } from "purify-ts";
import * as matchers from "./";

expect.extend(matchers);

describe("Either", () => {
    const left = () => Left("Error");
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

    it(".toHaveLeftValue", () => {
        expect(left()).toHaveLeftValue("Error");
    });

    it(".not.toHaveLeftValue", () => {
        expect(right()).not.toHaveLeftValue(1);
    });
});
