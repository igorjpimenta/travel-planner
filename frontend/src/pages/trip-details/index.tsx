import { DestinationAndDateHeader } from "./components/destination-and-date-header"
import { Activities } from "./components/activities"
import { HelpfulLinks } from "./components/helpful-links"
import { Invitees } from "./components/invitees"
import { Button } from "../../components/button"
import { CreateActivityModal } from "./modals/create-activity-modal"
import { AddNewLinkModal } from "./modals/add-new-link-modal"
import { ManageGuestsModal } from "../trip-details/modals/manage-guests-modal"

import { Plus } from "lucide-react"
import { FormEvent, useState } from "react"

export function TripDetails() {
  const [isChangeTripInfosEnabled, setIsChangeTripInfosEnabled] = useState(false)
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  const [isAddNewLinkModalOpen, setIsAddNewLinkModalOpen] = useState(false)
  const [isManageGuestsModalOpen, setIsManageGuestsModalOpen] = useState(false)

  const [guestsList, setGuestsList] = useState<string[]>([])

  function enableChangeTripInfos() {
    setIsChangeTripInfosEnabled(true)
  }

  function disableChangeTripInfos() {
    setIsChangeTripInfosEnabled(false)
  }

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  function openAddNewLinkModal() {
    setIsAddNewLinkModalOpen(true)
  }

  function closeAddNewLinkModal() {
    setIsAddNewLinkModalOpen(false)
  }

  function openGuestsModal() {
    setIsManageGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsManageGuestsModalOpen(false)
  }

  function changeTripInfos() {
    disableChangeTripInfos()
    return
  }

  function createActivity() {
    return
  }

  function createLink() {
    return
  }

  function addGuestFromList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (!guestsList.includes(email)) {
      setGuestsList([...guestsList, email])
    }
    
    event.currentTarget.reset()
  }

  function removeGuestFromList(emailToRemove: string) {
    const newEmailList = guestsList.filter(email => email !== emailToRemove)

    setGuestsList(newEmailList)
  }

  function manageGuests() {
    return
  }


  return (
    <div className="h-screen">
      <div className="max-w-[1100px] px-6 py-10 mx-auto space-y-8">
        <DestinationAndDateHeader
          enableChangeTripInfos={enableChangeTripInfos}
          changeTripInfos={changeTripInfos}
          isChangeTripInfosEnabled={isChangeTripInfosEnabled}
        />

        <main className="flex gap-16 px-4">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[32px] font-semibold">Activities</h2>
        
              <Button onClick={openCreateActivityModal}>
                <Plus className="size-5" />
                Add activity
              </Button>
            </div>

            <Activities />
          </div>

          <div className="w-80 space-y-6">
            <HelpfulLinks openAddNewLinkModal={openAddNewLinkModal} />
    
            <div className="w-full h-px bg-zinc-800"></div>

            <Invitees openGuestsModal={openGuestsModal} />
          </div>
        </main>
      </div>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeModalSetter={closeCreateActivityModal}
          onSubmit={createActivity}
        />
      )}

      {isAddNewLinkModalOpen && (
        <AddNewLinkModal
          closeModalSetter={closeAddNewLinkModal}
          onSubmit={createLink}
        />
      )}

      {isManageGuestsModalOpen && (
        <ManageGuestsModal
          guestsList={guestsList}
          addGuestFromList={addGuestFromList}
          removeGuestFromList={removeGuestFromList}
          closeModalSetter={closeGuestsModal}
          onSubmit={manageGuests}
        />
      )}
    </div>
  )
}