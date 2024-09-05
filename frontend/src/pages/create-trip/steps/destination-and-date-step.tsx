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
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOnpen}
          type="text"
          placeholder="Where are you going?"
          className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOnpen}
          type="text"
          placeholder="When?"
          className="bg-transparent text-lg placeholder:text-zinc-400 outline-none w-40"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestsInputOnpen ? (
        <button
          onClick={closeGuestsInput}
          className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2"
        >
          Change trip infos
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={openGuestsInput}
          className="bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2"
        >
          Continue
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  )
}