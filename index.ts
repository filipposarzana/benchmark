import { Event, Suite } from 'benchmark'
import chalk from 'chalk'
import { log } from './utils/log'

type TFilterValue = 'fastest' | 'slowest'
type TMapValue = 'name'

type TSuite = {
  map: (value: TMapValue) => string[]
}

type TEvent = Event & {
  currentTarget: {
    filter: (value: TFilterValue) => TSuite
  }
}

const onComplete = (event: TEvent) => {
  log('')

  const names = event.currentTarget.filter('fastest').map('name').join(', ')

  log(`${chalk.bgCyan.black('Complete:')} fastest cases are: ${chalk.bold(names)}`)
}

const onCycle = (event: TEvent) => {
  const result = String(event.target)

  log(`${chalk.bgCyan.black('Cycle:')} ${result}`)
}

const getSuite = (name: string) => new Suite(name, {
  async: true,
  onComplete,
  onCycle,
})

export { getSuite }
