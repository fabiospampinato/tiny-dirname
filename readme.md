# Tiny Dirname

A tiny isomorphic ESM alternative to Node's "__dirname" global.

## Install

```sh
npm install --save tiny-dirname
```

## Usage

```ts
import dirname from 'tiny-dirname';

dirname ( import.meta.url ); // => '/path/to'
```

## License

MIT © Fabio Spampinato
