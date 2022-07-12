import { defineStore } from 'pinia'
import type { User, UserState } from '@/types/user'

export const useUser = defineStore('user', {
  state: (): UserState => ({
    username: '',
    image_path: '',
    email: '',
    friends: [],
    requests_sent: [],
    notifications: [],
    upload_image: false
  }),
  actions: {
    set_user(user: User) {
      const { username, image_path, email, friends, requests_sent, notifications } = user
      this.username = username
      this.image_path = image_path
      this.email = email
      this.friends = friends
      this.requests_sent = requests_sent
      this.notifications = notifications
    },
    set_upload_image(value: boolean) {
      this.upload_image = value
    }
  },
  getters: {
    get_user(): User {
      return { 
        username: this.username ,
        image_path: this.image_path,
        email: this.email,
        friends: this.friends,
        requests_sent: this.requests_sent,
        notifications: this.notifications
      }
    },
    get_upload_image(): boolean {
      return this.upload_image
    }
  }
})