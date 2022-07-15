<template>
  <header class="flex flex-row justify-between items-center flex-nowrap w-full p-5 bg-black">
    <thumbnail-avatar :image_path="get_user.image_path" :href="`/${get_user.username}/account`" :logged_user="true" />
    <search-bar />
    <button @click="logout" @keyup.enter="logout">Logout</button>
  </header>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user'
import ThumbnailAvatar from '@/components/commons/thumbnail-avatar.vue'
import SearchBar from '@/components/search-bar.vue'
import { logout } from '@/composables/logout'

defineNuxtComponent({
  ThumbnailAvatar,
  SearchBar
})

const { get_user } = toRefs(useUser())
</script>