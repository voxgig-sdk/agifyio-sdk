<?php
declare(strict_types=1);

// Agifyio SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AgifyioFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AgifyioBaseFeature();
            case "test":
                return new AgifyioTestFeature();
            default:
                return new AgifyioBaseFeature();
        }
    }
}
