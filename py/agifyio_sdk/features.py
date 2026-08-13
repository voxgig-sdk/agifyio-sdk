# Agifyio SDK feature factory

from agifyio_sdk.feature.base_feature import AgifyioBaseFeature
from agifyio_sdk.feature.test_feature import AgifyioTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AgifyioBaseFeature(),
        "test": lambda: AgifyioTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
