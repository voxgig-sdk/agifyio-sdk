# Agifyio SDK utility: make_context
require_relative '../core/context'
module AgifyioUtilities
  MakeContext = ->(ctxmap, basectx) {
    AgifyioContext.new(ctxmap, basectx)
  }
end
