
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AgifyioSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await AgifyioSDK.test()
    equal(null !== testsdk, true)
  })

})
