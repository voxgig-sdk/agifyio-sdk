package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetAgeEntityFunc func(client *AgifyioSDK, entopts map[string]any) AgifyioEntity

