# is-extname [![Build Status](https://travis-ci.org/bukinoshita/is-extname.svg?branch=master)](https://travis-ci.org/bukinoshita/is-extname)

> Check file extension name


## Install

```bash
$ yarn add is-extname
```


## Usage

```js
const isExtname = require('is-extname')

const create = async file => {
  const extname = isExtname(file, 'json')

  if (extname) {
    return await create()
  }

  return new TypeError(`We don't support this type of file.`)
}
```


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
