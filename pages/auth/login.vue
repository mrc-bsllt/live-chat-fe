<template>
  <section class="relative w-full h-full">
    <form-modal :formData="user" buttonLabel="Login" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" @showErrors="setErrors">
      <div class="form__wrapper">
        <input-text 
          v-for="(input, index) in inputs" 
          :key="index" 
          :inputType="input.type" 
          :field="input.field" 
          :label="input.label" 
          @getValue="setValue"
          :showError="input.show_error"
        />
      </div>
    </form-modal>
  </section>
</template>

<script setup lang="ts">
import FormModal from '@/components/commons/form-modal.vue'
import InputText from '@/components/commons/input-text.vue'
import type { User } from '@/types/user'
import type { Input, Error } from '@/types/form'

definePageMeta({
  layout: 'auth'
})
defineNuxtComponent({
  FormModal,
  InputText
})

const inputs = ref<Input[]>([
  {
    type: 'email',
    field: 'email',
    label: 'Email',
    show_error: false
  },
  {
    type: 'password',
    field: 'password',
    label: 'Password',
    show_error: false
  }
])

const user = ref<User>({
  email: '',
  password: ''
})

function setValue(event: Event, field: keyof User) {
  const value = (event.target as HTMLInputElement).value

  const index_input = inputs.value.findIndex(input => input.field === field)
  inputs.value[index_input].show_error = false

  user.value[field] = value
}

function setErrors(errors: Error[]) {
  errors.forEach(error => {
    const index_input = inputs.value.findIndex(input => input.field === error.param)
    inputs.value[index_input].show_error = error
  })
}
</script>