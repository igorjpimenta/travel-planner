import { ArrowRight, UserRoundPlus } from "lucide-react"

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  openGuestsModal: () => void
  openConfirmedTripModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  openGuestsModal,
  openConfirmedTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        onClick={openGuestsModal}
        type="button"
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length ? (
          <span className="text-zinc-100 text-lg">
            {emailsToInvite.length} {emailsToInvite.length > 1 ? 'people' : 'person'} invited
          </span>
        ) : (
          <span className="text-zinc-400 text-lg">Who are you traveling with?</span>
        )}
      </button>
  
      <div className="w-px h-6 bg-zinc-800"></div>
  
      <button
        type="button"
        onClick={openConfirmedTripModal}
        className="bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2"
      >
        Confirm trip
        <ArrowRight className="size-5" />
      </button>
    </div>
  )
}