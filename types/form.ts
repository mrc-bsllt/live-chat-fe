import type { User } from '@/types/user'

type InputTypes = 'text' | 'password' | 'email' | 'jwt'

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

export type SubmitLabel = 'Login' | 'Signup'