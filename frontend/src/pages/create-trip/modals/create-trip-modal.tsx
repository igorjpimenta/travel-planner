import { Button } from "../../../components/button"
import { InputWrapper } from "../../../components/input-wrapper"
import { Modal, ModalProps } from "../../../components/modal"

import { Mail, User } from "lucide-react"
import { FormEvent } from "react"

interface CreateTripModalProps extends Pick<ModalProps, 'closeModalSetter'> {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function CreateTripModal({ onSubmit, closeModalSetter }: CreateTripModalProps) {
  return (
    <Modal
      closeModalSetter={closeModalSetter}
      title={<>Confirm trip creation</>}
      subtitle={<>To finish the creation of the trip to <span className="font-semibold text-zinc-100">Florianópolis, Brazil</span> from <span className="font-semibold text-zinc-100">October 12 to 18, 2024</span> fill in the form below:</>}
    >
      <form
        onSubmit={onSubmit}
        className="space-y-3"
      >
        <InputWrapper
          kind="absolute"
          classNames="flex-1"
          icon={User}
          name="name"
          placeholder="Full name"
        />

        <InputWrapper
          kind="absolute"
          classNames="flex-1"
          icon={Mail}
          name="email"
          placeholder="Your best email"
        />
        
        <Button
          type="submit"
          size="full"
        >
          Confirm trip creation
        </Button>
      </form>
    </Modal>
  )
}