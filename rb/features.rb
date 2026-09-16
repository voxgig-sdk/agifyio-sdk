# Agifyio SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AgifyioFeatures
  def self.make_feature(name)
    case name
    when "base"
      AgifyioBaseFeature.new
    when "ratelimit"
      AgifyioRatelimitFeature.new
    when "retry"
      AgifyioRetryFeature.new
    when "test"
      AgifyioTestFeature.new
    when "timeout"
      AgifyioTimeoutFeature.new
    else
      AgifyioBaseFeature.new
    end
  end
end
