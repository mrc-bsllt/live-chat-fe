<template>
  <section class="relative w-full h-full">
    <modal class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></modal>
  </section>
</template>

<script setup lang="ts">
import modal from '@/components/commons/modal.vue'

definePageMeta({
  layout: 'auth'
})
defineNuxtComponent({
  modal
})
</script>