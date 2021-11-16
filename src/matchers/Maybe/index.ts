import { Maybe } from "purify-ts";
import { fail, pass } from "../../utils";

type U = unknown;

export function toBeJust(actual: Maybe<U>) {
    return actual.caseOf({
        Nothing: () =>
            fail(`Expected value to be Nothing but got Just instead`),
        Just: (_) =>
            pass(`Expected the value to be Just but got Nothing instead`),
    });
}

export function toBeNothing(actual: Maybe<U>) {
    return actual.caseOf({
        Nothing: () =>
            pass(`Expected value to be Nothing but got Just instead`),
        Just: (_) =>
            fail(`Expected the value to be Just but got Nothing instead`),
    });
}

export function toHaveJustValue(maybe: Maybe<U>, value: U) {
    return maybe.extract() === value
        ? pass(`Expected other than ${value} but got ${maybe.toString()}`)
        : fail(`Expected ${value} but got ${maybe.toString()}`);
}
