

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AgifyioSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetAgeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AGIFYIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('AGIFYIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AgifyioSDK.test()
    const ent = testsdk.GetAge()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AGIFYIO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_age.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"age":{"a":true,"h":"Age","n":"age","r":false,"t":"`$INTEGER`","key$":"age","index$":0},"count":{"a":true,"h":"Count","n":"count","r":false,"t":"`$INTEGER`","key$":"count","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":2}},"name":"get_age","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"apikey","or":"apikey","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"US","k":"query","n":"country_id","or":"country_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"michael","k":"query","n":"name","or":"name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/","q":{"exist":["apikey","country_id","name"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_age","name__orig":"get_age","Name":"GetAge","name_":"get_age","name-":"get-age","NAME":"GET_AGE","index$":0}, {"active":true,"entity":"get_age","key$":"BasicGetAgeFlow","kind":"basic","name":"BasicGetAgeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"get_age_ref01","srcdatavar":"get_age_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_age_ref01"}}],"index$":0}]}, 'GetAge', {"GET /":{"protocol":"http","operationId":"getAge","responses":{"200":{"description":"Successful age prediction response","content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"name":{"type":"string","description":"The name that was queried","example":"michael"},"age":{"type":"integer","nullable":true,"description":"The estimated age for the name. Null if no data is available","example":56},"count":{"type":"integer","description":"The number of data records used to calculate the age estimate","example":233490},"country_id":{"type":"string","description":"The country code that was used for localization (if provided)","pattern":"^[A-Z]{2}$","example":"US"}},"required":["name","age","count"],"x-ref":"#/components/schemas/AgePrediction"},{"type":"array","items":{"type":"object","properties":{"name":{"type":"string","description":"The name that was queried","example":"michael"},"age":{"type":"integer","nullable":true,"description":"The estimated age for the name. Null if no data is available","example":56},"count":{"type":"integer","description":"The number of data records used to calculate the age estimate","example":233490},"country_id":{"type":"string","description":"The country code that was used for localization (if provided)","pattern":"^[A-Z]{2}$","example":"US"}},"required":["name","age","count"],"x-ref":"#/components/schemas/AgePrediction"}}]},"examples":{"single":{"summary":"Single name prediction","value":{"name":"michael","age":56,"count":233490}},"withCountry":{"summary":"Prediction with country localization","value":{"name":"michael","age":62,"count":45087,"country_id":"US"}},"batch":{"summary":"Batch prediction for multiple names","value":[{"name":"peter","age":58,"count":165432},{"name":"john","age":61,"count":298456}]}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"}},"required":["error"],"x-ref":"#/components/schemas/Error"},"example":{"error":"Invalid country_id parameter"}}}},"401":{"description":"Unauthorized - invalid or missing API key","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"}},"required":["error"],"x-ref":"#/components/schemas/Error"},"example":{"error":"Invalid API key"}}}},"422":{"description":"Unprocessable entity - missing required name parameter","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"}},"required":["error"],"x-ref":"#/components/schemas/Error"},"example":{"error":"Missing 'name' parameter"}}}},"429":{"description":"Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"}},"required":["error"],"x-ref":"#/components/schemas/Error"},"example":{"error":"Request limit reached"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"}},"required":["error"],"x-ref":"#/components/schemas/Error"},"example":{"error":"Internal server error"}}}}},"parameters":[{"name":"name","in":"query","description":"First name to estimate age for. Can be passed multiple times for batch requests (e.g., name[]=peter&name[]=john)","required":true,"schema":{"type":"string"},"example":"michael","index$":0},{"name":"country_id","in":"query","description":"Optional ISO 3166-1 alpha-2 country code to localize the age estimation to a specific country","required":false,"schema":{"type":"string","pattern":"^[A-Z]{2}$"},"example":"US","index$":1},{"name":"apikey","in":"query","description":"API key for authenticated requests. Required for usage beyond the free tier (100 requests/day)","required":false,"schema":{"type":"string"},"index$":2}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"query","name":"apikey","description":"API key for authentication. Free tier allows 100 requests per day without API key (IP-based limiting). Paid plans require an API key."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_age_ref01_data = Object.values(setup.data.existing.get_age)[0] as any

    // LOAD
    const get_age_ref01_ent = client.GetAge()
    const get_age_ref01_match_dt0: any = {}
    const get_age_ref01_data_dt0 = (await get_age_ref01_ent.load(get_age_ref01_match_dt0)).data()
    assert(null != get_age_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_age/GetAgeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AgifyioSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_age01','get_age02','get_age03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AGIFYIO_TEST_GET_AGE_ENTID': idmap,
    'AGIFYIO_TEST_LIVE': 'FALSE',
    'AGIFYIO_TEST_EXPLAIN': 'FALSE',
    'AGIFYIO_APIKEY': '',
  })

  idmap = env['AGIFYIO_TEST_GET_AGE_ENTID']

  const live = 'TRUE' === env.AGIFYIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AGIFYIO_TEST_GET_AGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AgifyioSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.AGIFYIO_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.AGIFYIO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
