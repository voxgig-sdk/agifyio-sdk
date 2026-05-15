<?php
declare(strict_types=1);

// Agifyio SDK exists test

require_once __DIR__ . '/../agifyio_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AgifyioSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
