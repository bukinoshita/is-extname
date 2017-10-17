'use strict'

import test from 'ava'
import m from '.'

test(t => {
  t.true(m('./package.json', 'json'))
  t.false(m('./package.json', 'txt'))
})
