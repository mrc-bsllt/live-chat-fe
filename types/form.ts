import type { User } from '@/types/user'

type InputTypes = 'text' | 'password' | 'email' | 'tel'

export interface Input {
  type: InputTypes
  field: keyof User
  label: string
  show_error: Error | false
}

export interface Error {
  msg: string
  param: keyof User
}