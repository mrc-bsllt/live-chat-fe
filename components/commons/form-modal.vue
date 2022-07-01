<template>
  <div v-bind="$attrs" class="w-90 md:w-60 xl:w-50 min-h-[300px] p-10 bg-white rounded-[20px] shadow-2xl">
    <form @submit.prevent="submitForm" novalidate>
      <slot />
      <div class="button__wrapper text-center mt-10">
        <button type="submit" class="btn btn-success">{{ props.buttonLabel }}</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { API_HOST } from '@/utils/config'
import type { User } from '@/types/user'
import type { Error } from '@/types/form'

const props = defineProps({
  formData: { type: Object as () => User, required: true },
  buttonLabel: { type: String, required: true }
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
      }
    }
  })
}
function login() {
  console.log('fired login')
}
</script>