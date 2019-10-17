import test from 'ava'
import m from '.'

test('is ext name', t => {
  t.true(m('./package.json', 'json'))
  t.false(m('./package.json', 'txt'))
})
