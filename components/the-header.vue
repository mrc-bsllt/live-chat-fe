<template>
  <header class="flex flex-row justify-between items-center flex-nowrap w-full p-5 bg-black">
    <thumbnail-avatar :image_path="user_image" :show_username="false" :href="`/${get_user.username}/account`" />
    <button @click="logout" @keyup.enter="logout">Logout</button>
  </header>
</template>

<script setup lang="ts">
import { API_HOST } from '@/utils/config'
import { useUser } from '@/store/user'
import ThumbnailAvatar from '@/components/commons/thumbnail-avatar.vue'
import { logout } from '@/composables/logout'

defineNuxtComponent({
  ThumbnailAvatar
})

const { get_user } = toRefs(useUser())
const user_image = computed(() => {
  const { image_path } = get_user.value
  
  if(image_path) {
    return API_HOST + image_path
  } else {
    return '../assets/images/avatar.webp'
  }
})
</script>