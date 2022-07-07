<template>
  <svg v-bind="$attrs" class="ico" :class="`icon-${name}`">
    <use :xlink:href="`/ico-defs.svg?v=20210108#icon-${name}`"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true }
})
</script>