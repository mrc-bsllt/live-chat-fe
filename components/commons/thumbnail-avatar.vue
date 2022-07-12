<template>
<nuxt-link :to="href" class="relative flex flex-row justify-start items-center flex-nowrap">
  <div class="relative inline-block w-[50px] h-[50px] rounded-[50%] border border-solid border-gold overflow-hidden">
    <img :src="props.image_path" alt="user-avatar" class="w-full h-full object-cover object-center" width="50" height="50">
    <loader v-if="logged_user && get_upload_image" class="scale-30 -left-[5px]" />
  </div>
</nuxt-link>
</template>

<script setup lang="ts">
import Loader from '@/components/commons/loader.vue'
import { useUser } from '@/store/user'

defineNuxtComponent({
  Loader
})

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
  },
  logged_user: { type: Boolean, default: false }
})

const { get_upload_image } = toRefs(useUser())
</script>