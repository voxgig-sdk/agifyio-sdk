<?php
declare(strict_types=1);

// Agifyio SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

AgifyioUtility::setRegistrar(function (AgifyioUtility $u): void {
    $u->clean = [AgifyioClean::class, 'call'];
    $u->done = [AgifyioDone::class, 'call'];
    $u->make_error = [AgifyioMakeError::class, 'call'];
    $u->feature_add = [AgifyioFeatureAdd::class, 'call'];
    $u->feature_hook = [AgifyioFeatureHook::class, 'call'];
    $u->feature_init = [AgifyioFeatureInit::class, 'call'];
    $u->fetcher = [AgifyioFetcher::class, 'call'];
    $u->make_fetch_def = [AgifyioMakeFetchDef::class, 'call'];
    $u->make_context = [AgifyioMakeContext::class, 'call'];
    $u->make_options = [AgifyioMakeOptions::class, 'call'];
    $u->make_request = [AgifyioMakeRequest::class, 'call'];
    $u->make_response = [AgifyioMakeResponse::class, 'call'];
    $u->make_result = [AgifyioMakeResult::class, 'call'];
    $u->make_point = [AgifyioMakePoint::class, 'call'];
    $u->make_spec = [AgifyioMakeSpec::class, 'call'];
    $u->make_url = [AgifyioMakeUrl::class, 'call'];
    $u->param = [AgifyioParam::class, 'call'];
    $u->prepare_auth = [AgifyioPrepareAuth::class, 'call'];
    $u->prepare_body = [AgifyioPrepareBody::class, 'call'];
    $u->prepare_headers = [AgifyioPrepareHeaders::class, 'call'];
    $u->prepare_method = [AgifyioPrepareMethod::class, 'call'];
    $u->prepare_params = [AgifyioPrepareParams::class, 'call'];
    $u->prepare_path = [AgifyioPreparePath::class, 'call'];
    $u->prepare_query = [AgifyioPrepareQuery::class, 'call'];
    $u->result_basic = [AgifyioResultBasic::class, 'call'];
    $u->result_body = [AgifyioResultBody::class, 'call'];
    $u->result_headers = [AgifyioResultHeaders::class, 'call'];
    $u->transform_request = [AgifyioTransformRequest::class, 'call'];
    $u->transform_response = [AgifyioTransformResponse::class, 'call'];
});
