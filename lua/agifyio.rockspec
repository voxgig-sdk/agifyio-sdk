package = "voxgig-sdk-agifyio"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/agifyio-sdk.git"
}
description = {
  summary = "Agifyio SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["agifyio_sdk"] = "agifyio_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
