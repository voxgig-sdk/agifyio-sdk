
import { Context } from './Context'


class AgifyioError extends Error {

  isAgifyioError = true

  sdk = 'Agifyio'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  AgifyioError
}

