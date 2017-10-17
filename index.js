'use strict'

const path = require('path')

module.exports = (file, ext) => {
  const fileType = path.extname(file).replace('.', '')

  return fileType === ext
}
