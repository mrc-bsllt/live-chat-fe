<template>
<nuxt-link :to="href" class="flex flex-row justify-start items-center flex-nowrap">
  <div class="inline-block w-[50px] h-[50px] rounded-[50%] border border-solid border-gold overflow-hidden">
    <img :src="props.image_path" alt="user-avatar" class="w-full h-full object-cover object-center" width="50" height="50">
  </div>
</nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  image_path: {
    type: String,
    required: true
  },
  show_username: {
    type: Boolean,
    default: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>