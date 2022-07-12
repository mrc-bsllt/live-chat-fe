<template>
  <div class="w-full h-screen overflow-hidden bg-chat_bg bg-repeat bg-contain">
    <the-header ref="header" />
    <the-aside ref="aside" :style="{ top, height }" />
    <main ref="main" :style="{ marginLeft }" class="h-full p-5">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/the-header.vue'
import TheAside from '@/components/the-aside.vue'
import { API_HOST } from '@/utils/config'
import { logout } from '@/composables/logout'
import type { User } from '@/types/user'
import { useUser } from '@/store/user'
defineNuxtComponent({
  TheHeader,
  TheAside
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
        const { username, image_path, email, friends, requests_sent, notifications } = response._data
        set_user({ username, image_path, email, friends, requests_sent, notifications })
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