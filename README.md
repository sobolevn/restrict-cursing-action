# Restrict Cursing Action

[![wemake.services](https://img.shields.io/badge/%20-wemake.services-green.svg?label=%20&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](https://wemake.services)
[![Github Marketplace](https://img.shields.io/badge/github-marketplace-brightgreen?logo=github)](https://github.com/marketplace/actions/restrict-cursing-action)
[![Github Action](https://github.com/sobolevn/restrict-cursing-action/workflows/test/badge.svg)](https://github.com/sobolevn/restrict-cursing-action/actions)
[![wemake-python-styleguide](https://img.shields.io/badge/style-wemake-000000.svg)](https://github.com/wemake-services/wemake-frontend-styleguide)

This Github Action is used to automatically moderate comments with bad language.

What it does? It turns offensive comments into [`I am so sorry`](https://github.com/sobolevn/restrict-cursing-action/issues/3) comments:

[![Demo](https://github.com/sobolevn/restrict-cursing-action/blob/master/assets/demo.png?raw=true)](https://github.com/sobolevn/restrict-cursing-action)

Supports:

- Issues and pull requests
- Issue and pull request comments

We use [`cuss`](https://github.com/words/cuss) as the bad words database.


## Usage

Put this into your [workflow](https://help.github.com/en/articles/configuring-a-workflow):

```yaml
name: comments

on:
  issues:
    types: [opened, edited]
  issue_comment:
    types: [created, edited]
  pull_request:
    types: [created, edited]

jobs:
  comments:

    runs-on: ubuntu-latest

    steps:
    - uses: sobolevn/restrict-cursing-action@latest
      env:
        # We need this token to edit the comment text:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

You can also configure the final text:

```yaml
    steps:
    - uses: sobolevn/restrict-cursing-action@latest
      with:
        # Also supports emoji:
        text: "Your custom text :+1:"
      env:
        # We need this token to edit the comment text:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
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
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.


## License

[MIT](https://github.com/sobolevn/restrict-cursing-action/blob/master/LICENSE)
