type U = unknown;

declare namespace jest {
  interface Matchers<R> {
    pass: (reason: string) => R;
    fail: (reason: string) => R;
    toBeJust(): R;
    toBeNothing(): R;
    toHaveJustValue<T>(v: T): R;
  }
}
