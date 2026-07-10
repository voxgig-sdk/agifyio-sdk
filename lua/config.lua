-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "Agifyio",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.agify.io",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_age"] = {},
      },
    },
    entity = {
      ["get_age"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "age",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "count",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
        },
        ["name"] = "get_age",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "apikey",
                      ["orig"] = "apikey",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "US",
                      ["kind"] = "query",
                      ["name"] = "country_id",
                      ["orig"] = "country_id",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "michael",
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
                ["select"] = {
                  ["exist"] = {
                    "apikey",
                    "country_id",
                    "name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
