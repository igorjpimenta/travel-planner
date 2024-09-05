import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'

import { FormEvent, useState } from 'react'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTrip() {
  const [isGuestsInputOnpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOnpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmedTripModalOnpen, setIsConfirmedTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function openConfirmedTripModal() {
    setIsConfirmedTripModalOpen(true)
  }

  function closeConfirmedTripModal() {
    setIsConfirmedTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (!emailsToInvite.includes(email)) {
      setEmailsToInvite([...emailsToInvite, email])
    }
    
    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="w-[720px] px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="" />

          <p className="text-zinc-300 text-lg">
            Invite your friends to your next trip!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOnpen={isGuestsInputOnpen}
            openGuestsInput={openGuestsInput}
            closeGuestsInput={closeGuestsInput}
          />

          {isGuestsInputOnpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openGuestsModal={openGuestsModal}
              openConfirmedTripModal={openConfirmedTripModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Planning your trip through plann.er you automatically agree <br />
          to our <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="#">privacy policies</a>.
        </p>
      </div>

      {isGuestsModalOnpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
          closeGuestsModal={closeGuestsModal}
        />
      )}

      {isConfirmedTripModalOnpen && (
        <ConfirmTripModal
          closeConfirmedTripModal={closeConfirmedTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  )
}
