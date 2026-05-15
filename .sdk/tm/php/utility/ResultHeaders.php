<?php
declare(strict_types=1);

// Agifyio SDK utility: result_headers

class AgifyioResultHeaders
{
    public static function call(AgifyioContext $ctx): ?AgifyioResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
