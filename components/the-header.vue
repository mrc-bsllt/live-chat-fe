<template>
  <header class="w-full p-5 bg-black">
    <button @click="logout" @keyup.enter="logout">Logout</button>
  </header>
</template>

<script setup lang="ts">
import { logout } from '@/composables/logout'
</script>