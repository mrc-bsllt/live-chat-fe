<template>
  <div class="input__wrapper relative flex flex-col justify-start items-start flex-nowrap mb-5">
    <label :for="props.field" class="mb-1">{{ props.label }}</label>
    <input 
      :type="props.inputType" 
      :id="props.field" 
      class="w-full border-2 border-solid rounded-[3px] bg-total_black/[.3] outline-gold"
      :class="!showError ? 'border-grey' : 'border-error'"
      @input="($event) => $emit('getValue', $event, props.field)"
    >
    <p v-if="showError" class="absolute top-full left-0 text-10 text-error">{{ showError.msg }}</p>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/user'
import type { Error } from '@/types/form'

const props = defineProps({
  inputType: { 
    type: String, 
    default: 'text' 
  },
  field: { 
    type: String as () => keyof User, 
    required: true 
  },
  label: { 
    type: String, 
    required: true 
  },
  showError: { 
    type: [
      Object as () => Error, 
      Boolean as () => false
      ],
    default: false
  }
})
</script>