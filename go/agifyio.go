package voxgigagifyiosdk

import (
	"github.com/voxgig-sdk/agifyio-sdk/core"
	"github.com/voxgig-sdk/agifyio-sdk/entity"
	"github.com/voxgig-sdk/agifyio-sdk/feature"
	_ "github.com/voxgig-sdk/agifyio-sdk/utility"
)

// Type aliases preserve external API.
type AgifyioSDK = core.AgifyioSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AgifyioEntity = core.AgifyioEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AgifyioError = core.AgifyioError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetAgeEntityFunc = func(client *core.AgifyioSDK, entopts map[string]any) core.AgifyioEntity {
		return entity.NewGetAgeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAgifyioSDK = core.NewAgifyioSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
