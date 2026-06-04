# Agifyio SDK

Estimate a person's age from their first name using a dataset of around 1 billion names

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Agify.io

Agify is a name-to-age inference API operated by [Demografix ApS](https://agify.io/) in Roskilde, Denmark. It predicts a likely age for a given first name by correlating name popularity cycles with birth years across a dataset of roughly a billion people. Agify is one of a family of three sister APIs alongside [Genderize.io](https://genderize.io/) (gender from names) and [Nationalize.io](https://nationalize.io/) (nationality from names).

**What you get from the API:**

- `name` — the submitted name, echoed back
- `age` — the predicted age
- `count` — the number of records the prediction was based on

The service supports full name parsing, diacritics and non-Latin alphabets, and optional geographic scoping to a specific country for improved accuracy.

Requests go to `https://api.agify.io` over HTTPS as a simple `GET` with a `name` query parameter; CORS is enabled. An `apikey` query parameter is required — sign in at agify.io to obtain one. The free tier allows 2,500 names per month.

## Try it

**TypeScript**
```bash
npm install agifyio
```

**Python**
```bash
pip install agifyio-sdk
```

**PHP**
```bash
composer require voxgig/agifyio-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/agifyio-sdk/go
```

**Ruby**
```bash
gem install agifyio-sdk
```

**Lua**
```bash
luarocks install agifyio-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AgifyioSDK } from 'agifyio'

const client = new AgifyioSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o agifyio-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "agifyio": {
      "command": "/abs/path/to/agifyio-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetAge** | A single name-lookup resource that returns an estimated age, exposed at `/?name=...` on `https://api.agify.io`. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from agifyio_sdk import AgifyioSDK

client = AgifyioSDK({})


# Load a specific getage
getage, err = client.GetAge(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'agifyio_sdk.php';

$client = new AgifyioSDK([]);


// Load a specific getage
[$getage, $err] = $client->GetAge(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/agifyio-sdk/go"

client := sdk.NewAgifyioSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Agifyio_sdk"

client = AgifyioSDK.new({})


# Load a specific getage
getage, err = client.GetAge(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("agifyio_sdk")

local client = sdk.new({})


-- Load a specific getage
local getage, err = client:GetAge(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AgifyioSDK.test()
const result = await client.GetAge().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AgifyioSDK.test(None, None)
result, err = client.GetAge(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AgifyioSDK::test(null, null);
[$result, $err] = $client->GetAge(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetAge(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AgifyioSDK.test(nil, nil)
result, err = client.GetAge(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetAge(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Agify.io

- Upstream: [https://agify.io/](https://agify.io/)
- API docs: [https://agify.io/documentation](https://agify.io/documentation)

- Operated by Demografix ApS (Roskilde, Denmark).
- Free tier: 2,500 names/month, no credit card required.
- Paid plans start at $20/month for higher volume.
- See agify.io for Terms of Service, Privacy Policy and GDPR / Data Processing Agreement.

---

Generated from the Agify.io OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
