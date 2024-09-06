import { Button } from "../../../components/button"
import { InputWrapper } from "../../../components/input-wrapper"

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
      <InputWrapper
        theme="transparent"
        classNames="flex-1"
        icon={MapPin}
        disabled={isGuestsInputOnpen}
        name="destination"
        placeholder="Where are you going?"
      />

      <InputWrapper
        theme="transparent"
        classNames="w-44"
        icon={Calendar}
        disabled={isGuestsInputOnpen}
        name="date_range"
        placeholder="When?"
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