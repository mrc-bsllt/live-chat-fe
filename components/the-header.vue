<template>
  <header class="w-full p-5 bg-black">
    <icon name="camera" class="w-[25px] h-[25px]" />
    <button @click="logout" @keyup.enter="logout">Logout</button>
  </header>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user'
import Icon from '@/components/commons/icon.vue'
import { logout } from '@/composables/logout'

defineNuxtComponent({
  Icon
})

const { get_user } = toRefs(useUser())
</script>