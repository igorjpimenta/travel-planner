import { Button } from "../../../components/button"
import { DateInputWrapper } from "../../../components/date-input-wrapper"
import { LocationInputWrapper } from "../../../components/location-input-wrapper"

import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"

interface DestinationAndDateStepProps {
  isGuestsInputOnpen: boolean
  openGuestsInput: () => void
  closeGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOnpen,
  openGuestsInput,
  closeGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <LocationInputWrapper
        spaceY={6}
        theme="transparent"
        classNames="flex-1"
        icon={MapPin}
        disabled={isGuestsInputOnpen}
        name="destination"
        placeholder="Where are you going?"
      />

      <DateInputWrapper
        classNames="w-44"
        icon={Calendar}
        disabled={isGuestsInputOnpen}
        placeholder="When?"
        mode="dateRange"
      />

      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestsInputOnpen ? (
        <Button
          onClick={closeGuestsInput}
          variant="secondary"
        >
          Change trip infos
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continue
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}