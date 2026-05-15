# Agifyio SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module AgifyioFeatures
  def self.make_feature(name)
    case name
    when "base"
      AgifyioBaseFeature.new
    when "test"
      AgifyioTestFeature.new
    else
      AgifyioBaseFeature.new
    end
  end
end
