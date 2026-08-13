# Agifyio SDK utility: make_context

from projectname_sdk.core.context import AgifyioContext


def make_context_util(ctxmap, basectx):
    return AgifyioContext(ctxmap, basectx)
