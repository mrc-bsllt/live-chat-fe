<template>
  <div class="w-full h-screen overflow-hidden bg-light_green">
    <the-header ref="header" />
    <the-aside ref="aside" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/the-header.vue'
import TheAside from '@/components/the-aside.vue'

defineNuxtComponent({
  TheHeader,
  TheAside
})
</script>