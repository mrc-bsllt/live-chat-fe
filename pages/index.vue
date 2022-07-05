<template>
  <div>
    <h1 class="text-green text-46">Home page (default layout)</h1>
    <p>{{ user?.username }}</p>
  </div>
</template>

<script setup lang="ts">
import { API_HOST } from '@/utils/config'
import { logout } from '@/composables/logout'
import type { User } from '@/types/user'

const { data: user } = await useAsyncData<User | never>('user', () => {
  const token = useCookie('token').value

  return $fetch(API_HOST + '/api/user', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
})

if(!user.value) logout()

</script>