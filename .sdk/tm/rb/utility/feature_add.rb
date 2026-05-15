# Agifyio SDK utility: feature_add
module AgifyioUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
