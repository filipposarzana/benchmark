import { getSuite } from '..'

const suite = getSuite('regex-constructor')

const regexComplex = new RegExp('([\w]+|[\W]+)', 'g')
const regexSimple = /([\w]+|[\W]+)/g

const testRegexSimple = (value: string) => regexSimple.test(value)
const testRegexComplex = (value: string) => regexComplex.test(value)

suite
  .add('testRegexComplex', () => testRegexComplex('{(abc)}'))
  .add('testRegexSimple', () => testRegexSimple('{(abc)}'))
  .run()
