# frozen_string_literal: true

# Typed models for the Agifyio SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetAge entity data model.
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
GetAge = Struct.new(
  :age,
  :count,
  :name,
  keyword_init: true
)

# Request payload for GetAge#load.
#
# @!attribute [rw] apikey
#   @return [String, nil]
#
# @!attribute [rw] country_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
GetAgeLoadMatch = Struct.new(
  :apikey,
  :country_id,
  :name,
  keyword_init: true
)

