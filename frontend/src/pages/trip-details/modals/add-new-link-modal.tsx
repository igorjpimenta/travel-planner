import { Button } from "../../../components/button"
import { InputWrapper } from "../../../components/input-wrapper"
import { Modal, ModalProps } from "../../../components/modal"

import { Link2, Tag } from "lucide-react"
import { FormEvent } from "react"

interface AddNewLinkModalProps extends Pick<ModalProps, 'closeModalSetter'> {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function AddNewLinkModal({ onSubmit, closeModalSetter }: AddNewLinkModalProps) {
  return (
    <Modal
      closeModalSetter={closeModalSetter}
      title={<>Add a new link</>}
      subtitle={<>All invitees can see the helpful links.</>}
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
          placeholder="What is the URL about?"
        />

        <InputWrapper
          kind="absolute"
          classNames="flex-1"
          icon={Link2}
          name="url"
          placeholder="URL"
        />

        <Button
          type="submit"
          size="full"
        >
          Save link
        </Button>
      </form>
    </Modal>
  )
}