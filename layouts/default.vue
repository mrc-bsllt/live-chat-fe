<template>
  <div class="w-full h-screen overflow-hidden bg-chat_bg bg-repeat bg-contain">
    <the-header ref="header" />
    <the-aside ref="aside" :style="{ top, height }" />
    <main ref="main" :style="{ marginLeft }" class="h-full p-5">
      <slot />
    </main>

    <transition name="slide-left" mode="out-in">
      <notification-banner v-if="get_show_banner" :style="{ top }">
        <p class="text-black">{{ get_message }}</p>
      </notification-banner>
    </transition>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/the-header.vue'
import TheAside from '@/components/the-aside.vue'
import NotificationBanner from '@/components/commons/notification_banner.vue'
import { API_HOST } from '@/utils/config'
import { logout } from '@/composables/logout'
import type { User } from '@/types/user'
import { useUser } from '@/store/user'
import { useIndex } from '@/store/index'
import openSocket from 'socket.io-client'

defineNuxtComponent({
  TheHeader,
  TheAside,
  NotificationBanner
})

const { data: user, refresh } = await useAsyncData<User | void>('user', () => {
  const token = useCookie('token').value
  const user_id = useCookie('user_id').value
  
  return $fetch(API_HOST + '/api/user/' + user_id, {
    headers: {
      Authorization: 'Bearer ' + token
    },
    async onResponse({ response }) {
      const { set_user } = useUser()
      if(response.status === 200) {
        const { username, image_path, email, friends, requests_sent, requests_received, notifications } = response._data
        set_user({ username, image_path, email, friends, requests_sent, requests_received, notifications })
      }
    }
  })
})
if(!user.value) logout()

// Refresh user when the image is changed
const { toggle_refresh_user } = useUser()
const { get_refresh_user } = toRefs(useUser())
watch(get_refresh_user, async (newValue: boolean) => {
  if(newValue) {
    await refresh()
    toggle_refresh_user()
  }
})
// -------------------------------------------------------------------------

// toggle notification banner
const { get_show_banner, get_message } = toRefs(useIndex())
const { toggle_show_banner, set_message } = useIndex()
watch(get_show_banner, (newValue: boolean) => {
  if(newValue) {
    setTimeout(() => {
      toggle_show_banner()
      set_message('')
    }, 4000)
  }
})
// -------------------------------------------------------------------------

// set Aside top/height value AND main margin-left
const header = ref<typeof TheHeader | null>(null)
const aside = ref<typeof TheAside | null>(null)
const top = ref<string>('0px')
const height = ref<string>('0px')
const marginLeft = ref<string>('0px')

function setCSSProperties(header: typeof TheHeader | null, aside: typeof TheHeader | null) {
  const headerHeight = header?.$el.getBoundingClientRect().height
  const asideWidth = aside?.$el.getBoundingClientRect().width
  top.value = headerHeight + 'px'
  height.value = `calc(100vh - ${headerHeight}px)`
  marginLeft.value = asideWidth + 'px'
}
onMounted(() => {
  const socket = openSocket('http://localhost:8080')
  socket.on('requests', data => {
    if(data.action === 'send') {
      
    }
  })

  setCSSProperties(header.value, aside.value)
  window.addEventListener('resize', () => {
    setCSSProperties(header.value, aside.value)
  })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    setCSSProperties(header.value, aside.value)
  })
})
// -------------------------------------------------------------------------
</script>