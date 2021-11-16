/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    toBeJust(): R;
    toBeNothing(): R;
    toHaveJustValue<T>(v: T): R;
    toBeLeft(): R;
    toBeRight(): R;
    toHaveLeftValue<T>(v: T): R;
    toHaveRightValue<T>(v: T): R;
  }
}
