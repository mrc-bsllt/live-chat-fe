<template>
  <ul v-bind="$attrs" class="w-full h-full">
    <li 
      v-for="(user, index) in props.list" 
      :key="index" 
      class="flex flex-row justify-start items-center flex-nowrap py-4" 
      :class="{ 'border-b border-solid border-black': index < props.list.length - 1 }"
    >
      <thumbnail-avatar :image_path="user.image_path" href="/" :username="user.username" class="text-black" />
      <button class="btn btn-success ml-10">{{ setLabel(user._id as string) }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user'
import ThumbnailAvatar from '@/components/commons/thumbnail-avatar.vue'
import { User } from '@/types/user'

defineNuxtComponent({
  ThumbnailAvatar
})

const props = defineProps({
  list: {
    type: Array as () => User[],
    required: true
  }
})

// Set button label
const { get_user } = toRefs(useUser())
const { friends, requests_sent, notifications } = get_user.value

function setLabel(friend_id: string): string {
  const friend_index = friends?.findIndex(friend => friend._id === friend_id)!
  const request_index = requests_sent?.findIndex(friend => friend._id === friend_id)!
  const notification_index = notifications?.findIndex(notification => {
    return notification.friend._id === friend_id && notification.text === 'Ti ha inviato una richiesta di amicizia.'
  })!
  
  if(friend_index < 0 && request_index < 0 && notification_index < 0) {
    return 'Aggiungi'
  } else if(friend_index > 0) {
    return 'Rimuovi'
  } else if(request_index > 0) {
    return 'In attesa'
  } else {
    return 'Accetta'
  }
}
// -------------------------------------------------------------------------
</script>