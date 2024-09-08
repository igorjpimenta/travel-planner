import { Button } from "../../../components/button"

import { Link2, Plus } from "lucide-react"

interface HelpfulLinksProps {
  openAddNewLinkModal: () => void
}

export function HelpfulLinks({ openAddNewLinkModal }: HelpfulLinksProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl">Helpful links</h2>

        <Button
          variant="secondary"
          size="icon"
          onClick={openAddNewLinkModal}
        >
          <Plus className="size-5" />
        </Button>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">AirBnB reservation</span>
            <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">https://www.airbnb.com.br/rooms/10293416431289234714612721347215631241234132</a>

          </div>
          <Link2 className="size-5 text-zinc-400 hover:text-zinc-200 shrink-0" />
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">AirBnB reservation</span>
            <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">https://www.airbnb.com.br/rooms/10293416431289234714612721347215631241234132</a>

          </div>
          <Link2 className="size-5 text-zinc-400 hover:text-zinc-200 shrink-0" />
        </div>
      </div>
    </div>
  )
}