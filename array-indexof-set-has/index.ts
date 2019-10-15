import { getSuite } from '..'
import { range } from '../utils/range'

const suite = getSuite('array-indexof-set-has')

const list = range(100000)
const items = range(100)
const set = new Set(items)

const arrayIndexOf = () => {
  items.filter(i => list.indexOf(i) !== -1)
}

const setHas = () => {
  items.filter(i => set.has(i))
}

suite
  .add('arrayIndexOf', () => arrayIndexOf())
  .add('setHas', () => setHas())
  .run()
