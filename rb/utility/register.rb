# Agifyio SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

AgifyioUtility.registrar = ->(u) {
  u.clean = AgifyioUtilities::Clean
  u.done = AgifyioUtilities::Done
  u.make_error = AgifyioUtilities::MakeError
  u.feature_add = AgifyioUtilities::FeatureAdd
  u.feature_hook = AgifyioUtilities::FeatureHook
  u.feature_init = AgifyioUtilities::FeatureInit
  u.fetcher = AgifyioUtilities::Fetcher
  u.make_fetch_def = AgifyioUtilities::MakeFetchDef
  u.make_context = AgifyioUtilities::MakeContext
  u.make_options = AgifyioUtilities::MakeOptions
  u.make_request = AgifyioUtilities::MakeRequest
  u.make_response = AgifyioUtilities::MakeResponse
  u.make_result = AgifyioUtilities::MakeResult
  u.make_point = AgifyioUtilities::MakePoint
  u.make_spec = AgifyioUtilities::MakeSpec
  u.make_url = AgifyioUtilities::MakeUrl
  u.param = AgifyioUtilities::Param
  u.prepare_auth = AgifyioUtilities::PrepareAuth
  u.prepare_body = AgifyioUtilities::PrepareBody
  u.prepare_headers = AgifyioUtilities::PrepareHeaders
  u.prepare_method = AgifyioUtilities::PrepareMethod
  u.prepare_params = AgifyioUtilities::PrepareParams
  u.prepare_path = AgifyioUtilities::PreparePath
  u.prepare_query = AgifyioUtilities::PrepareQuery
  u.result_basic = AgifyioUtilities::ResultBasic
  u.result_body = AgifyioUtilities::ResultBody
  u.result_headers = AgifyioUtilities::ResultHeaders
  u.transform_request = AgifyioUtilities::TransformRequest
  u.transform_response = AgifyioUtilities::TransformResponse
}
