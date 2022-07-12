<template>
  <div class="absolute top-0 left-0 flex flex-row justify-center items-center flex-nowrap w-full h-full overflow-hidden" :class="{ 'bg-total_black/[.95]': !props.disable_bg }">
    <div v-bind="$attrs" class="lds-ring">
      <div :style="{ borderColor }" />
      <div :style="{ borderColor }" />
      <div :style="{ borderColor }" />
      <div :style="{ borderColor }" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
const props = defineProps({
  disable_bg : {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#bebebe'
  }
})

const borderColor = computed(() => `${props.color} transparent transparent transparent`)
</script>

<style scoped lang="scss">
.lds-ring {
  @apply inline-block relative w-[80px] h-[80px];
}
.lds-ring div {
  @apply box-border block absolute w-[64px] h-[64px] m-2 border-8 border-solid border-grey rounded-[50%];
  animation: lds-ring 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  // border-color: #BEBEBE transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.2s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.1s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.05s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>