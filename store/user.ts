import { defineStore } from 'pinia'
import type { User, UserState } from '@/types/user'

export const useUser = defineStore('user', {
  state: (): UserState => ({
    username: '',
    image_path: '',
    email: '',
    friends: [],
    requests_sent: [],
    requests_received: [],
    notifications: [],
    refresh_user: false,
    upload_image: false
  }),
  actions: {
    set_user(user: User) {
      const { username, image_path, email, friends, requests_sent, requests_received, notifications } = user
      this.username = username
      this.image_path = image_path
      this.email = email
      this.friends = friends
      this.requests_sent = requests_sent
      this.requests_received = requests_received
      this.notifications = notifications
    },
    toggle_refresh_user() {
      this.refresh_user = !this.refresh_user
    },
    toggle_upload_image() {
      this.upload_image = !this.upload_image
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
        requests_received: this.requests_received,
        notifications: this.notifications
      }
    },
    get_upload_image(): boolean {
      return this.upload_image
    },
    get_refresh_user(): boolean {
      return this.refresh_user
    }
  }
})