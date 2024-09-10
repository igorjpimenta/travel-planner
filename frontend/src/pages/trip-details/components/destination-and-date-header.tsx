import { Button } from "../../../components/button"
import { LocationInputWrapper } from "../../../components/location-input-wrapper"
import { InputWrapper } from "../../../components/input-wrapper"

import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"
import { useState } from "react"

interface DestinationAndDateHeaderProps {
  enableChangeTripInfos: () => void
  changeTripInfos: () => void
  isChangeTripInfosEnabled: boolean
}

export function DestinationAndDateHeader({
  enableChangeTripInfos,
  changeTripInfos,
  isChangeTripInfosEnabled,
}: DestinationAndDateHeaderProps) {
  const [dateRangeInputValue, setDateRangeInputValue] = useState("August, 17 to 23")

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape justify-between">
      <LocationInputWrapper
        spaceY={6}
        theme="transparent"
        classNames="flex-1"
        icon={MapPin}
        disabled={!isChangeTripInfosEnabled}
        name="destination"
        initialValue="Florianópolis, Brazil"
        placeholder="Where are you going?"
      />

      <div className="flex items-center gap-5">
        <InputWrapper
          theme="transparent"
          classNames="w-44"
          icon={Calendar}
          disabled={!isChangeTripInfosEnabled}
          name="date_range"
          value={dateRangeInputValue}
          onChange={(e) => setDateRangeInputValue(e.target.value)}
          placeholder="When?"
        />

        <div className="w-px h-6 bg-zinc-800"></div>
        
        {isChangeTripInfosEnabled ? (
          <Button
            variant="primary"
            onClick={changeTripInfos}
          >
            Confirm
            <ArrowRight className="size-5" />
          </Button>
        ) : (
          <Button
            variant="secondary"
            onClick={enableChangeTripInfos}
          >
            Change trip infos
            <Settings2 className="size-5" />
          </Button>
        )}
      </div>
    </div>
  )
}