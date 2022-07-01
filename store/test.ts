import { defineStore } from 'pinia'

interface TestState {
  message: string
}

export const useTest = defineStore('test', {
  state: (): TestState => ({
    message: 'Ciaooo'
  }),
  getters: {
    get_message(): string {
      return this.message
    }
  }
})