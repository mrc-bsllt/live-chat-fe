<template>
  <div class="relative w-60 h-[40px]">
    <input 
      type="text" 
      placeholder="Cerca nuovi amici" 
      class="w-full h-full bg-transparent border-b border-solid border-grey outline-none px-6"
      v-model="inputValue"
      @input="searchFriends"
      @focus="searchFriends"
      @blur="onBlur"
    >
    <icon name="search" class="w-[20px] h-[20px] absolute top-1/2 left-0 -translate-y-1/2" />

    <div v-if="show_results" 
      class="absolute top-[110%] left-0 w-full px-5 rounded-bl-[10px] rounded-br-[10px] bg-grey overflow-hidden z-50" 
      :class="users_list.length ? 'py-5' : 'py-14'"
    >
      <template v-if="!users_list.length">
        <loader v-if="!no_results" :disable_bg="true" color="#303030" />
        <div v-else-if="no_results" class="flex flex-col justify-center items-center flex-nowrap w-full h-full">
          <icon name="sad" class="icon" />
          <p class="text-black font-semibold">Non abbiamo trovato nessuno!</p>
        </div>
      </template>
      <users-list v-else :list="users_list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { API_HOST } from '@/utils/config'
import Icon from '@/components/commons/icon.vue'
import Loader from '@/components/commons/loader.vue'
import UsersList from '@/components/commons/users-list.vue'
import { User, FetchedUser } from '@/types/user'

defineNuxtComponent({
  Icon,
  Loader,
  UsersList
})

// friends result banner
const show_results = ref<boolean>(false)
const no_results = ref<boolean>(false)
// -------------------------------------------------------------------------

// Blur event
function onBlur() {
  setTimeout(() => {
    show_results.value = false
  }, 500)
}
// -------------------------------------------------------------------------

// fetch users by username
const inputValue = ref<string>('')
const users_list = ref<User[]>([])
const users_count = ref<number>(0)
let bouncing: ReturnType<typeof setTimeout> | null = null

function searchFriends() {
  if(users_list.value.length) users_list.value = []
  if(no_results.value) no_results.value = false
  if(!show_results.value) show_results.value = true
  
  clearTimeout(bouncing as ReturnType<typeof setTimeout>)

  if(inputValue.value) {
    bouncing = setTimeout(async () => {
      const token = useCookie('token').value
      
      const { users, count } = await $fetch<FetchedUser>(`${API_HOST}/api/search-friends/${inputValue.value}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      
      users_list.value = users
      users_count.value = count
      if(!users_list.value.length) no_results.value = true
    }, 500)
  } else {
    show_results.value = false
  }
}
// -------------------------------------------------------------------------
</script>