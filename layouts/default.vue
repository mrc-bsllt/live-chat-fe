<template>
  <div class="w-full h-screen overflow-hidden bg-light_green">
    <the-header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/the-header.vue'

defineNuxtComponent({
  TheHeader
})
</script>