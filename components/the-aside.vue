<template>
  <aside v-bind="$attrs" class="fixed left-0 w-[200px] p-5 bg-black">
    <ul class="aside-list flex flex-col justify-start items-stretch flex-nowrap">
      <li class="item">
        <nuxt-link :to="`/${get_user.username}/notifications`" class="flex flex-row justify-start items-center flex-nowrap">
          <icon name="bell" class="w-[30px] h-[30px] mr-2" />
          <span>Notifiche</span>
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import Icon from '@/components/commons/icon.vue'
import { useUser } from '@/store/user'

defineNuxtComponent({
  Icon
})

const { get_user } = toRefs(useUser())
</script>