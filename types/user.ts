interface Notification {
  friend: User
  text: string
}
interface Message {
  text: string
  created_at: Date
}
type Messages = Message[]
interface Chat {
  friend: User
  messages: Messages
  created_at: Date
}
export interface User {
  image_path?: string,
  username?: string
  email: string
  password?: string
  confirm_password?: string,
  friends?: User[],
  requests_sent?: User[],
  notifications?: Notification[],
  chats?: Chat[]
}

export interface UserState extends User {
  refresh_user: boolean
  upload_image: boolean
}