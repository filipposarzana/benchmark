import { Event, Suite } from 'benchmark'
import chalk from 'chalk'

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
  console.log('')

  const names = event.currentTarget.filter('fastest').map('name').join(', ')

  console.log(`${chalk.bgCyan.black('Complete:')} fastest cases are: ${chalk.bold(names)}`)
}

const onCycle = (event: TEvent) => {
  const result = String(event.target)

  console.log(`${chalk.bgCyan.black('Cycle:')} ${result}`)
}

const getSuite = (name: string) => new Suite(name, {
  onComplete,
  onCycle,
  async: true,
})

export { getSuite }
