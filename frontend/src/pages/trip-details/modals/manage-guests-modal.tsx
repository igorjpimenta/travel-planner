import { Button } from "../../../components/button"
import { InputWrapper } from "../../../components/input-wrapper"
import { Modal, ModalProps } from "../../../components/modal"

import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface ManageGuestsModalProps extends Pick<ModalProps, 'closeModalSetter'> {
  guestsList: string[]
  addGuestFromList: (event: FormEvent<HTMLFormElement>) => void
  removeGuestFromList: (email: string) => void
  onSubmit: () => void
}

export function ManageGuestsModal({
  guestsList,
  addGuestFromList,
  removeGuestFromList,
  closeModalSetter,
}: ManageGuestsModalProps) {
  return (
    <Modal
      closeModalSetter={closeModalSetter}
      size="medium"
      title={<>Manage your guests</>}
      subtitle={<>All new guests will receive emails to confirm their participation in the trip.</>}
    >
      <div className="flex flex-wrap gap-2">
        {guestsList.map(email => {
          return (
            <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
              <span className="text-zinc-300">{email}</span>

              <button
                type="button"
                onClick={() => removeGuestFromList(email)}
              >
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          )
        })}
      </div>

      <div className="w-full h-px bg-zinc-800"></div>

      <form
        onSubmit={addGuestFromList}
        className="p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2"
      >
        <InputWrapper
          classNames="px-2 flex-1"
          theme="transparent"
          icon={AtSign}
          name="email"
          placeholder="Enter the guest's email"
        />

        <Button type="submit">
          Invite
          <Plus className="size-5" />
        </Button>
      </form>
    </Modal>
  )
}