*This repository is a mirror of the [component](http://component.io) module [kenany/prime](http://github.com/kenany/prime). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/kenany-prime`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# prime

[![Dependency Status](https://gemnasium.com/KenanY/prime.png)](https://gemnasium.com/KenanY/prime)

Primality test as a [component](https://github.com/component).

For primality testing in Node.js, check out [primality](https://github.com/KenanY/primality).

## Support

[![Support](https://ci.testling.com/KenanY/prime.png)](https://ci.testling.com/KenanY/prime)

## Installation

``` bash
$ component install KenanY/prime
```

## API

### prime(val)

Check primality of a number `val`:

``` javascript
prime(13);
// => true
```

## Development

``` shell
$ npm install
$ make
```

## License

MIT