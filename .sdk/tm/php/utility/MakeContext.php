<?php
declare(strict_types=1);

// Agifyio SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AgifyioMakeContext
{
    public static function call(array $ctxmap, ?AgifyioContext $basectx): AgifyioContext
    {
        return new AgifyioContext($ctxmap, $basectx);
    }
}
