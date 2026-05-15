# Agifyio SDK feature factory

from feature.base_feature import AgifyioBaseFeature
from feature.test_feature import AgifyioTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AgifyioBaseFeature(),
        "test": lambda: AgifyioTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
