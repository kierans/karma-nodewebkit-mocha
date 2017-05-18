# karma-nodewebkit-mocha
Karma plugin to allow Mocha to run in NW.js.

This plugin compensates for the wrong global variable being used when loading Mocha
in NW.js

For more details see [the GitHub issue that details the problem](https://github.com/karma-runner/karma-mocha/issues/184)

## Usage

```bash
npm install karma-nodewebkit-mocha karma-mocha --save-dev
```

In your `karma.conf` `frameworks` use `nodewebkit-mocha` instead of `mocha`.

To see plugin in action, see the `test/karma` project.

This plugin wraps `karma-mocha` and still requires it to be installed.

## License

MIT
