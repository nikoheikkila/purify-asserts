<h1 align="center">Purify-TS Asserts</h1>

![Version](https://img.shields.io/npm/v/purify-asserts)
![Downloads](https://img.shields.io/npm/dw/purify-asserts)
![License](https://img.shields.io/npm/l/purify-asserts)
![GitHub issues](https://img.shields.io/github/issues/nikoheikkila/purify-asserts)
![GitHub Repo stars](https://img.shields.io/github/stars/nikoheikkila/purify-asserts?style=social)

> Jest expectations for the [**purify-ts**](https://gigobyte.github.io/purify/) library

## Motivation

Purify is an excellent library for functional TypeScript applications, but its algebraic data types are not so obvious to test. Specifically, the following convention examples are not easy to remember in the scope of unit tests.

```ts
expect(maybe.isJust()).toBe(true);
expect(maybe.isNothing()).toBe(true);
expect(maybe.extract()).toEqual("value");

expect(either.isLeft()).toBe(false);
expect(either.isRight()).toBe(true);
expect(either.extract()).toEqual("is this success or error?");
```

Wouldn't it be more satisfying to assert expectations with the same domain language Purify speaks of? I think so.

```ts
expect(possiblyNullableMaybe).toBeJust();
expect(justOrNothing).toBeNothing();
expect(justOrNothing).toHaveJustValue(1);
```

## Install

```sh
npm install --save-dev purify-asserts
yarn add --dev purify-asserts
```

## Usage

Using matchers requires to use the `expect.extend()` method of Jest. These should be imported and used at the beginning of your test suite above the first `describe()` block.

Import all of the matchers:

```ts
import * as matchers from "purify-asserts";

expect.extend(matchers);
```

Import only selected matchers:

```ts
import { toBeJust, toBeNothing } from "purify-asserts";

expect.extend({ toBeJust, toBeNothing });
```

## Examples

- [Examples](./src/matchers/Maybe/index.test.ts) for using `Maybe<T>` matchers
- Examples for using `Either<L, R>` matchers (work in progress)
- Examples for using `MaybeAsync<T>` matchers (work in progress)
- Examples for using `EitherAsync<L, R>` matchers (work in progress)
- Examples for using `Tuple<F, S>` matchers (work in progress)
- Examples for using `NonEmptyList<T>` matchers (work in progress)
- Examples for using `Codec<T>` matchers (work in progress)

## Author

👤 **Niko Heikkilä <yo@nikoheikkila.fi>**

- Website: <https://nikoheikkila.fi>
- Mastodon: [@nikoheikkila](https://mastodon.technology/@nikoheikkila)
- Github: [@nikoheikkila](https://github.com/nikoheikkila)
- LinkedIn: [@nikoheikkila](https://linkedin.com/in/nikoheikkila)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/nikoheikkila/purify-asserts/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
