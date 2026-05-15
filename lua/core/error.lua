-- Agifyio SDK error

local AgifyioError = {}
AgifyioError.__index = AgifyioError


function AgifyioError.new(code, msg, ctx)
  local self = setmetatable({}, AgifyioError)
  self.is_sdk_error = true
  self.sdk = "Agifyio"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AgifyioError:error()
  return self.msg
end


function AgifyioError:__tostring()
  return self.msg
end


return AgifyioError
