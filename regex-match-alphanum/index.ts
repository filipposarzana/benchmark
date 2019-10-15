import { getSuite } from '..'

const suite = getSuite('regex-match-alphanum')

const regexComplex = /([^a-zA-z0-9]*)([a-zA-Z0-9]*)([^a-zA-Z0-9]*)/
const regexSimple = /([a-zA-Z0-9]+)/

const testRegexSimple = (value: string) => regexSimple.test(value)
const testRegexComplex = (value: string) => regexComplex.test(value)

suite
  .add('testRegexComplex', () => testRegexComplex('{(abc)}'))
  .add('testRegexSimple', () => testRegexSimple('{(abc)}'))
  .run()
