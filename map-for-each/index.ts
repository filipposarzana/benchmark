import { getSuite } from '..'

const suite = getSuite('map-for-each')

const list = [1, 2, 4, 5, 6]

const forBase = () => {
  const items: number[] = []

  for (let i = 1; i < list.length; i++) {
    items.push(i + 1)
  }

  return items
}

const forEach = () => {
  const items: number[] = []

  list.forEach(i => {
    items.push(i + 1)
  })

  return items
}

const forOf = () => {
  const items: number[] = []

  for (const i of list) {
    items.push(i + 1)
  }

  return items
}

const forIn = () => {
  const items: number[] = []

  for (const i in list) {
    if (list[i]) {
      items.push(Number.parseInt(i, 10) + 1)
    }
  }

  return items
}

const map = () => list.map(i => i + 1)

suite
  .add('forBase', () => forBase())
  .add('forEach', () => forEach())
  .add('forOf', () => forOf())
  .add('forIn', () => forIn())
  .add('map', () => map())
  .run()
