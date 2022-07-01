<template>
  <section class="relative w-full h-full">
    <form-modal :formData="newUser" buttonLabel="Sign-up" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="form__wrapper">
        <input-text 
          v-for="(input, index) in inputs" 
          :key="index" 
          :inputType="input.type" 
          :field="input.field" 
          :label="input.label" 
          @getValue="setValue"
        />
      </div>
    </form-modal>
  </section>
</template>

<script setup lang="ts">
import FormModal from '@/components/commons/form-modal.vue'
import InputText from '@/components/commons/input-text.vue'
import type { User } from '@/types/user'
import type { Input } from '@/types/form'

definePageMeta({
  layout: 'auth'
})
defineNuxtComponent({
  FormModal,
  InputText
})

const inputs = ref<Input[]>([
  {
    type: 'text',
    field: 'username',
    label: 'Username'
  },
  {
    type: 'email',
    field: 'email',
    label: 'Email'
  },
  {
    type: 'password',
    field: 'password',
    label: 'Password'
  },
  {
    type: 'password',
    field: 'confirm_password',
    label: 'Confirm Password'
  },
])

const newUser = ref<User>({
  username: '',
  email: '',
  password: '',
  confirm_password: ''
})

function setValue(event: Event, field: keyof User) {
  const value = (event.target as HTMLInputElement).value
  newUser.value[field] = value
}
</script>