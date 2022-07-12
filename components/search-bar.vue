<template>
  <div class="relative w-60 h-[40px]">
    <input 
      type="text" 
      placeholder="Cerca nuovi amici" 
      class="w-full h-full bg-transparent border-b border-solid border-grey outline-none px-6"
      v-model="inputValue"
      @input="searchFriends"
    >
    <icon name="search" class="w-[20px] h-[20px] absolute top-1/2 left-0 -translate-y-1/2" />
  </div>
</template>

<script setup lang="ts">
import { API_HOST } from '@/utils/config'
import Icon from '@/components/commons/icon.vue'

defineNuxtComponent({
  Icon
})

// fetch users by username
const inputValue = ref<string>('')
let bouncing: ReturnType<typeof setTimeout> | null = null

function searchFriends() {
  clearTimeout(bouncing as ReturnType<typeof setTimeout>)

  if(inputValue.value) {
    bouncing = setTimeout(async () => {
      const token = useCookie('token').value
    
      const friends = await $fetch(`${API_HOST}/api/search-friends/${inputValue.value}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
    
      console.log(friends)
    }, 500)
  }
}
// -------------------------------------------------------------------------
</script>