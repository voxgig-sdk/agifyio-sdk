<?php
declare(strict_types=1);

// Agifyio SDK utility: prepare_body

class AgifyioPrepareBody
{
    public static function call(AgifyioContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
