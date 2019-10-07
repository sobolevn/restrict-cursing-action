# Restrict Cursing Action

This Github Action is used to automatically delete comments with bad language.

We use [`cuss`](https://github.com/words/cuss) as the words database.


## Usage

```yaml
- uses: sobolevn/restrict-cursing-action@latest
```

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:


## Development

Install the dependencies:

```bash
$ npm install
```

Build the typescript:

```bash
$ npm run build
```

Run the tests :heavy_check_mark::

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.


## License

[MIT](https://github.com/sobolevn/restrict-cursing-action/blob/master/LICENSE)
