import { FC } from 'react'

import { SelectImageProps } from '@features/selectImage/selectImage.types'

export type User = {
  uuid: string
  name: string
  avatar?: string | FC<SelectImageProps>
}

export type Message = {
  uuid: string
  user: User
  text: string
  image: File | null
  date: Date
}
