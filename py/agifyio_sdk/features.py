# Agifyio SDK feature factory

from agifyio_sdk.feature.base_feature import AgifyioBaseFeature
from agifyio_sdk.feature.ratelimit_feature import AgifyioRatelimitFeature
from agifyio_sdk.feature.retry_feature import AgifyioRetryFeature
from agifyio_sdk.feature.test_feature import AgifyioTestFeature
from agifyio_sdk.feature.timeout_feature import AgifyioTimeoutFeature


_FEATURES = {
    "base": lambda: AgifyioBaseFeature(),
    "ratelimit": lambda: AgifyioRatelimitFeature(),
    "retry": lambda: AgifyioRetryFeature(),
    "test": lambda: AgifyioTestFeature(),
    "timeout": lambda: AgifyioTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
