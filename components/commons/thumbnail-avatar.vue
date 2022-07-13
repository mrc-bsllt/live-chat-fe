<template>
<nuxt-link :to="href" class="relative flex flex-row justify-start items-center flex-nowrap">
  <div class="relative inline-block w-[50px] h-[50px] rounded-[50%] border border-solid border-gold overflow-hidden">
    <img :src="user_image" alt="user-avatar" class="w-full h-full object-cover object-center" width="50" height="50">
    <loader v-if="logged_user && get_upload_image" class="scale-30 -left-[5px]" />
  </div>
  <p v-if="props.username" v-bind="$attrs" class="ml-2">{{ props.username }}</p>
</nuxt-link>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { API_HOST } from '@/utils/config'
import Loader from '@/components/commons/loader.vue'
import { useUser } from '@/store/user'

defineNuxtComponent({
  Loader
})

const props = defineProps({
  image_path: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: false
  },
  href: {
    type: String,
    required: true
  },
  logged_user: { type: Boolean, default: false }
})

const user_image = computed(() => {
  if(props.image_path) {
    return API_HOST + props.image_path
  } else {
    return '../../assets/images/avatar.webp'
  }
})

const { get_upload_image } = toRefs(useUser())
</script>