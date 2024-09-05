import { User, X } from "lucide-react"
import { FormEvent } from "react"

interface ConfirmTripModalProps {
  closeConfirmedTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({ closeConfirmedTripModal, createTrip }: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirm trip creation
            </h2>

            <button
              type="button"
              onClick={closeConfirmedTripModal}
            >
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            To finish the creation of the trip to <span className="font-semibold text-zinc-100">Florianópolis, Brazil</span> from <span className="font-semibold text-zinc-100">October 12 to 18, 2024</span> fill in the form below:
          </p>
        </div>

        <form
          onSubmit={createTrip}
          className="space-y-3"
        >
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Full name"
              className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              name="email"
              placeholder="Your best email"
              className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg px-5 h-[42px] font-medium flex items-center justify-center w-full"
          >
            Confirm trip creation
          </button>
        </form>
      </div>
    </div>
  )
}