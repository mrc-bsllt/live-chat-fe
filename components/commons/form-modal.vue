<template>
  <div v-bind="$attrs" class="w-90 md:w-60 xl:w-50 min-h-[300px] p-10 bg-white rounded-[20px] shadow-2xl">
    <form @submit.prevent="submitForm" novalidate>
      <slot />
      <div class="button__wrapper text-center mt-10">
        <button type="submit" class="btn btn-success">{{ props.buttonLabel }}</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/user'

const props = defineProps({
  formData: { type: Object as () => User, required: true },
  buttonLabel: { type: String, required: true }
})

function submitForm() {
  console.log('Fired!', props.formData)
}
</script>