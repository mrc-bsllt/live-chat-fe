<template>
  <ul v-bind="$attrs" class="w-full h-full">
    <li 
      v-for="(friend, index) in props.list" 
      :key="index" 
      class="flex flex-row justify-start items-center flex-nowrap py-4" 
      :class="{ 'border-b border-solid border-black': index < props.list.length - 1 }"
    >
      <thumbnail-avatar :image_path="friend.image_path" href="/" :username="friend.username" class="text-black" />
      <button 
        class="btn ml-10" 
        :class="setLabel(friend._id as string) !== 'Rimuovi' ? 'btn-success' : 'btn-error'"
        @click="onSubmit(friend._id as string, setLabel(friend._id as string))"
        :disabled="setLabel(friend._id as string) === 'In attesa'"
      >
          {{ setLabel(friend._id as string) }}
      </button>
      <button 
        v-if="setLabel(friend._id as string) === 'Accetta'" 
        class="btn btn-error ml-5" 
        @click="reject_request(friend._id as string, toggle_refresh_user)"
      >
        Rifiuta
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { sendRequest, accept_request, remove_friend, reject_request } from '@/composables/friendship'
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

const { get_user } = toRefs(useUser())
const { toggle_refresh_user } = useUser()

// Set button label
function setLabel(friend_id: string): string {
  const friend_index = get_user.value.friends?.findIndex(friend => friend._id === friend_id)!
  const sent_index = get_user.value.requests_sent?.findIndex(friend => friend._id === friend_id)!
  const received_index = get_user.value.requests_received?.findIndex(friend => friend._id === friend_id)!
  
  if(friend_index < 0 && sent_index < 0 && received_index < 0) {
    return 'Aggiungi'
  } else if(friend_index >= 0) {
    return 'Rimuovi'
  } else if(sent_index >= 0) {
    return 'In attesa'
  } else {
    return 'Accetta'
  }
}
// -------------------------------------------------------------------------

// Submit requests (functions are imprted from ./composables/friendship.ts)
function onSubmit(friend_id: string, action: string) {
  if(action === 'Aggiungi') {
    sendRequest(friend_id, toggle_refresh_user)
  } else if(action === 'Rimuovi') {
    remove_friend(friend_id, toggle_refresh_user)
  } else if(action === 'Accetta') {
    accept_request(friend_id, toggle_refresh_user)
  }
}
// -------------------------------------------------------------------------
</script>