<?php
declare(strict_types=1);

// Agifyio SDK base feature

class AgifyioBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(AgifyioContext $ctx, array $options): void {}
    public function PostConstruct(AgifyioContext $ctx): void {}
    public function PostConstructEntity(AgifyioContext $ctx): void {}
    public function SetData(AgifyioContext $ctx): void {}
    public function GetData(AgifyioContext $ctx): void {}
    public function GetMatch(AgifyioContext $ctx): void {}
    public function SetMatch(AgifyioContext $ctx): void {}
    public function PrePoint(AgifyioContext $ctx): void {}
    public function PreSpec(AgifyioContext $ctx): void {}
    public function PreRequest(AgifyioContext $ctx): void {}
    public function PreResponse(AgifyioContext $ctx): void {}
    public function PreResult(AgifyioContext $ctx): void {}
    public function PreDone(AgifyioContext $ctx): void {}
    public function PreUnexpected(AgifyioContext $ctx): void {}
}
