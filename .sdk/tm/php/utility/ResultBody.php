<?php
declare(strict_types=1);

// Agifyio SDK utility: result_body

class AgifyioResultBody
{
    public static function call(AgifyioContext $ctx): ?AgifyioResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
