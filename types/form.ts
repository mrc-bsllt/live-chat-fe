import type { User } from '@/types/user'

type InputTypes = 'text' | 'password' | 'email' | 'tel'

export interface Input {
  type: InputTypes
  field: keyof User
  label: string
}