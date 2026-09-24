
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AgifyioSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = AgifyioSDK.test()
    equal(testsdk instanceof AgifyioSDK, true,
      'AgifyioSDK.test() must return a client synchronously')
  })

})
