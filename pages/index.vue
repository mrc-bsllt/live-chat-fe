<template>
  <div>
    <h1 class="text-green text-46">Home page (default layout)</h1>
    <p>{{ get_message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useTest } from '@/store/test'
const { get_message } = toRefs(useTest())
</script>