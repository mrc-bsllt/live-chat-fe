import { defineStore } from 'pinia'
import type { IndexState } from '@/types/index'

export const useIndex = defineStore('index', {
  state: (): IndexState => ({
    show_banner: false,
    message: ''
  }),
  actions: {
    toggle_show_banner() {
      this.show_banner = !this.show_banner
    },
    set_message(message: string) {
      this.message = message
    }
  },
  getters: {
    get_show_banner(): boolean {
      return this.show_banner
    },
    get_message(): string {
      return this.message
    }
  }
})