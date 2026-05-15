# ProjectName SDK exists test

import pytest
from agifyio_sdk import AgifyioSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AgifyioSDK.test(None, None)
        assert testsdk is not None
