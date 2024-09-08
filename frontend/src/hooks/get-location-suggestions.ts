import { config } from "../../config"

import mapboxgl from "@mapbox/mapbox-sdk/services/geocoding"

interface GetLocationSuggestionsRequest {
  input: string
}

export interface GetLocationSuggestionsResponse {
  city: string
  state: string
  country: string
}

export async function getLocationSuggestions({ input }: GetLocationSuggestionsRequest): Promise<GetLocationSuggestionsResponse[]> {
  const mapboxClient = mapboxgl({
    accessToken: config.MAPBOX_ACCESS_TOKEN,
  })

  const response = await mapboxClient
    .forwardGeocode({
      query: input,
      language: ["en"],
      limit: 5,
      types: ["place"],
    })
    .send()

  const features = response.body.features

  return features.map((location) => {
    const [city, state, country] = location.place_name.split(", ")

    return { city, state, country }
  })
}