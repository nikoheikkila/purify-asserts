import { Either } from "purify-ts";
import { fail, pass } from "../../utils";

type U = unknown;

export function toBeLeft(actual: Either<U, U>) {
  return actual.caseOf({
    Left: (_) => pass(`Expected value not to be Left, but got Left instead`),
    Right: (_) => fail(`Expected value to be Left, but got Right instead`),
  });
}

export function toBeRight(actual: Either<U, U>) {
    return actual.caseOf({
        Left: (_) => fail(`Expected value to be Right, but got Left instead`),
        Right: (_) =>
            pass(`Expected value not to be Right, but got Right instead`),
    });
}
