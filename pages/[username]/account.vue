<template>
  <section class="flex flex-col justify-start items-center flex-nowrap h-full">
    <form @submit.prevent="onSubmit" class="relative" novalidate>
      <label for="user_image" class="relative flex flex-row justify-center items-center flex-nowrap w-[200px] h-[200px] bg-grey rounded-[10px] overflow-hidden cursor-pointer">
        <icon name="camera" class="icon" />
        <img v-if="image_path || temporary_image" 
            :src="temporary_image || API_HOST + image_path" 
            class="absolute top-0 left-0 w-full h-full object-cover object-center"
            alt="user-image" width="200" height="200">
        <input type="file" id="user_image" class="hidden" @change="updateFile">

        <loader v-if="get_upload_image" />
      </label>

      <button 
        type="submit" 
        class="flex flex-row justify-center items-center flex-nowrap w-[40px] h-[40px] btn-success absolute top-0 left-[105%] !rounded-[50%] disabled:opacity-40"
        :disabled="temporary_image === undefined"
      >
        <icon name="disk" class="w-[20px] h-[20px]" />
      </button>
    </form>
    
    <nuxt-link to="/">Indietro</nuxt-link>
  </section>
</template>

<script setup lang="ts">
import { API_HOST } from '@/utils/config'
import Icon from '@/components/commons/icon.vue'
import { useUser } from '@/store/user'
import Loader from '@/components/commons/loader.vue'

defineNuxtComponent({
  Icon,
  Loader
})

const { get_user, get_upload_image } = toRefs(useUser())

// Update user image localy
const { image_path } = get_user.value
const temporary_image = ref<string | undefined>(undefined)
const file = ref<File | undefined>(undefined)
function updateFile($event: Event) {
  const files = ($event.target as HTMLInputElement).files
  if(files?.length) {
    file.value = files[0]
    temporary_image.value = URL.createObjectURL(file.value)
  }
}

async function onSubmit() {
  const token = useCookie('token').value

  const formData = new FormData()
  formData.append('image_path', file?.value as File)

  await $fetch(API_HOST + '/api/user/update-image', {
    headers: {
      Authorization: 'Bearer ' + token
    },
    method: 'POST',
    body: formData,
    async onResponse({ response }) {
      console.log(response._data)
    }
  })
}
</script>