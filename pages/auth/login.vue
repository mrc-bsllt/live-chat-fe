<template>
  <section class="relative w-full h-full">
    <form-modal :formData="user" buttonLabel="Login" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="form__wrapper">Login</div>
    </form-modal>
  </section>
</template>

<script setup lang="ts">
import FormModal from '@/components/commons/form-modal.vue'
import type { User } from '@/types/user'

definePageMeta({
  layout: 'auth'
})
defineNuxtComponent({
  FormModal
})

const user = ref<User>({
  email: '',
  password: ''
})
</script>