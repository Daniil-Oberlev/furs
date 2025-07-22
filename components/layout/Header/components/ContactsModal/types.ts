import type { Dispatch, SetStateAction } from 'react'

export type TContactsModal = {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
