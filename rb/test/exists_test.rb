# Agifyio SDK exists test

require "minitest/autorun"
require_relative "../Agifyio_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = AgifyioSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
