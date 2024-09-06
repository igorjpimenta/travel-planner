import { Button } from "../../../components/button"

import { CircleCheck, CircleDashed, UserCog } from "lucide-react"

interface InviteesProps {
  openGuestsModal: () => void
}

export function Invitees({ openGuestsModal }: InviteesProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl">Invitees</h2>

        <Button
          variant="secondary"
          size="icon"
          onClick={openGuestsModal}
        >
          <UserCog className="size-5" />
        </Button>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 group">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Jéssica White</span>

            <span className="block text-sm text-zinc-400 truncate">jessica.white44@yahoo.com</span>
          </div>

          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
        
        <div className="flex items-center justify-between gap-4 group">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Dra. Rita Pacocha</span>

            <span className="block text-sm text-zinc-400 truncate">rita.paconha@gmail.com</span>
          </div>

          <CircleCheck className="size-5 text-lime-300 shrink-0" />
        </div>
      </div>
    </div>
  )
}