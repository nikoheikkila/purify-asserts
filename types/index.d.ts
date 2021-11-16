/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    toBeJust(): R;
    toBeNothing(): R;
    toHaveJustValue<T>(v: T): R;
  }
}
