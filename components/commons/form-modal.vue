<template>
  <div v-bind="$attrs" class="w-90 md:w-60 xl:w-50 min-h-[300px] p-10 bg-black rounded-[20px] shadow-2xl">
    <form @submit.prevent="submitForm" novalidate>
      <slot />
      <div class="button__wrapper text-center mt-10">
        <button type="submit" class="btn btn-success">{{ props.buttonLabel }}</button>
      </div>
    </form>

    <div class="mt-5 text-center">
      <span>{{ bottomMessage }} <nuxt-link :to="`/auth/${bottomLink.toLowerCase()}`" class="text-18 text-gold underline">{{ bottomLink }}</nuxt-link></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { API_HOST } from '@/utils/config'
import type { User } from '@/types/user'
import type { SubmitLabel, Error } from '@/types/form'

const props = defineProps({
  formData: { type: Object as () => User, required: true },
  buttonLabel: { type: String as () => SubmitLabel, required: true }
})

const bottomMessage = computed((): string => {
  if(props.buttonLabel === 'Login') {
    return 'Don\'t have an account?'
  } else {
    return 'Already have an account?'
  }
})
const bottomLink = computed((): SubmitLabel => {
  if(props.buttonLabel === 'Login') {
    return 'Signup'
  } else {
    return 'Login'
  }
})
function submitForm() {
  if('password' in props.formData && 'confirm_password' in props.formData) {
    signup()
  } else {
    login()
  }
}

const emit = defineEmits(['showErrors'])
async function signup() {
  await $fetch(`${API_HOST}/api/auth/signup`, {
    method: 'POST',
    body: props.formData,
    async onResponse({ response }) {
      const errors: Error[] = response._data.errors
      if(response._data.errors) {
        emit('showErrors', errors)
      } else {
        navigateTo('/auth/login')
      }
    }
  })
}
async function login() {
  await $fetch(`${API_HOST}/api/auth/login`, {
    method: 'POST',
    body: props.formData,
    async onResponse({ response }) {
      const errors: Error[] = response._data.errors
      if(response._data.errors) {
        emit('showErrors', errors)
      } else {
        const { token, user_id } = response._data
        useCookie('token', { maxAge: 60 * 60 * 8 }).value = token
        useCookie('user_id', { maxAge: 60 * 60 * 8 }).value = user_id
        navigateTo('/')
      }
    }
  })
}
</script>