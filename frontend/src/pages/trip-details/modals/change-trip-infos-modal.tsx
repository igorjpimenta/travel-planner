import { Button } from "../../../components/button"
import { LocationInputWrapper } from "../../../components/location-input-wrapper"
import { InputWrapper } from "../../../components/input-wrapper"
import { Modal, ModalProps } from "../../../components/modal"

import { Calendar, MapPin } from "lucide-react"
import { FormEvent } from "react"

interface ChangeTripInfosModalProps extends Pick<ModalProps, 'closeModalSetter'> {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function ChangeTripInfosModal({ onSubmit, closeModalSetter }: ChangeTripInfosModalProps) {
  return (
    <Modal
      closeModalSetter={closeModalSetter}
      title={<>Change trip infos</>}
    >
      <form
        onSubmit={onSubmit}
        className="space-y-3"
      >

        <LocationInputWrapper
          kind="absolute"
          classNames="flex-1"
          icon={MapPin}
          name="destination"
          placeholder="Where are you going?"
        />

        <InputWrapper
          kind="absolute"
          classNames="flex-1"
          icon={Calendar}
          name="date_range"
          placeholder="When?"
        />

        <Button
          size="full"
          type="submit"
          className="h-[42px]"
        >
          Confirm changes
        </Button>
      </form>
    </Modal>
  )
}