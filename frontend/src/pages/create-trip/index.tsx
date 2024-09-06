import { InviteGuestsModal } from './modals/invite-guests-modal'
import { CreateTripModal } from './modals/create-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CreateTrip() {
  const navigate = useNavigate()

  const [isGuestsInputOnpen, setIsGuestsInputOpen] = useState(false)
  const [isInviteGuestsModalOnpen, setIsInviteGuestsModalOpen] = useState(false)
  const [isConfirmedTripModalOnpen, setIsConfirmedTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openInviteGuestsModal() {
    setIsInviteGuestsModalOpen(true)
  }

  function closeInviteGuestsModal() {
    setIsInviteGuestsModalOpen(false)
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

    navigate('/trips/12345')
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
              openInviteGuestsModal={openInviteGuestsModal}
              openConfirmedTripModal={openConfirmedTripModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Planning your trip through plann.er you automatically agree <br />
          to our <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="#">privacy policies</a>.
        </p>
      </div>

      {isInviteGuestsModalOnpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
          closeModalSetter={closeInviteGuestsModal}
        />
      )}

      {isConfirmedTripModalOnpen && (
        <CreateTripModal
          closeModalSetter={closeConfirmedTripModal}
          onSubmit={createTrip}
        />
      )}
    </div>
  )
}
