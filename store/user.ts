import { defineStore } from 'pinia'
import type { User } from '@/types/user'

export const useUser = defineStore('user', {
  state: (): User => ({
    username: '',
    image_path: '',
    email: '',
    friends: [],
    requests_sent: [],
    notifications: []
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
    }
  }
})