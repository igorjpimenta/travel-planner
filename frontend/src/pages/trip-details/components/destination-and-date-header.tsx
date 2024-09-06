import { Button } from "../../../components/button"

import { Calendar, MapPin, Settings2 } from "lucide-react"

interface DestinationAndDateHeaderProps {
  openChangeTripInfosModal: () => void
}

export function DestinationAndDateHeader({ openChangeTripInfosModal }: DestinationAndDateHeaderProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-100">Florianópolis, Brazil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">August, 17 to 23</span>
        </div>

        <div className="w-px h-6 bg-zinc-800"></div>
        
        <Button
          variant="secondary"
          onClick={openChangeTripInfosModal}
        >
          Change trip infos
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}