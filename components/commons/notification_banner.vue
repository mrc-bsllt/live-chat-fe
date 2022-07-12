<template>
  <div v-bind="$attrs" class="fixed right-0 min-w-[400px] min-h-[100px] flex flex-row justify-center items-center flex-nowrap p-5 rounded-tl-[10px] rounded-bl-[10px] bg-grey">
    <slot />
  </div>
</template>