<?php
declare(strict_types=1);

// Agifyio SDK utility: feature_add

class AgifyioFeatureAdd
{
    public static function call(AgifyioContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
