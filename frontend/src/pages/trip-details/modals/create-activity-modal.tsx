import { Modal, ModalProps } from "../../../components/modal"
import { InputWrapper } from "../../../components/input-wrapper"
import { Button } from "../../../components/button"

import { Calendar, Clock, Tag } from "lucide-react"
import { FormEvent } from "react"

interface CreateActivityModalProps extends Pick<ModalProps, 'closeModalSetter'> {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function CreateActivityModal({ onSubmit, closeModalSetter }: CreateActivityModalProps) {
  return (
    <Modal
      closeModalSetter={closeModalSetter}
      title={<>Register activity</>}
      subtitle={<>All invitees can see the activities.</>}
    >
      <form
        onSubmit={onSubmit}
        className="space-y-3"
      >
        <InputWrapper
          kind="absolute"
          classNames="flex-1"
          icon={Tag}
          name="title"
          placeholder="Which activity?"
        />

        <div className="flex items-center gap-2">
          <InputWrapper
            kind="absolute"
            classNames="flex-1"
            icon={Calendar}
            name="date"
            placeholder="Activity date"
          />

          <InputWrapper
            kind="absolute"
            classNames="w-[140px]"
            icon={Clock}
            name="time"
            placeholder="Time"
          />
        </div>

        <Button
          type="submit"
          size="full"
        >
          Save activity
        </Button>
      </form>
    </Modal>
  )
}