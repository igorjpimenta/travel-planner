import { InputWrapper, InputWrapperProps } from "./input-wrapper"
import { getLocationSuggestions, GetLocationSuggestionsResponse } from "../hooks/get-location-suggestions"

import { useState, useEffect } from "react"
import debounce from "lodash.debounce"

interface LocationInputWrapperProps extends InputWrapperProps {
  spaceY?: number
  fill?: boolean
  initialValue?: string
}

export function LocationInputWrapper({
  initialValue='',
  spaceY=1,
  fill=true,
  ...props
}: LocationInputWrapperProps) {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState(initialValue)
  const [suggestions, setSuggestions] = useState<GetLocationSuggestionsResponse[]>([])

  function handleSelectLocation(selection: GetLocationSuggestionsResponse) {
    setInputValue(`${selection.city}, ${selection.country}`)
    setSuggestions([])
  }

  const handleGetLocationSuggestions = debounce(async (input: string) => {
    if (!input) {
      setSuggestions([])
      return
    }

    try {
      const locations = await getLocationSuggestions({ input })
      setSuggestions(locations)

    } catch (error) {
      console.error("Error fetching location suggestions:", error)
    }
  }, 300)

  useEffect(() => {
    handleGetLocationSuggestions(query)

    return () => {
      handleGetLocationSuggestions.cancel()
    }
  }, [query])

  return (
    <div className={`relative space-y-${spaceY} ${fill && "flex-1"}`}>
      <InputWrapper
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          setQuery(e.target.value)
        }}
        {...props}
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-zinc-900 shadow-shape rounded-lg text-left truncate">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-3.5 py-2 hover:bg-zinc-800 cursor-pointer text-zinc-100"
              onClick={() => handleSelectLocation(suggestion)}
            >
              {`${suggestion.city}, ${suggestion.state}, ${suggestion.country}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}