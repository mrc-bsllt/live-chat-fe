<template>
  <div class="input__wrapper flex flex-col justify-start items-start flex-nowrap mb-3">
    <label :for="props.field" class="mb-1">{{ props.label }}</label>
    <input 
      :type="props.inputType" 
      :id="props.field" 
      class="w-full border-2 border-solid border-grey rounded-[3px]"
      @input="($event) => $emit('getValue', $event, props.field)">
  </div>
  <p v-if="showError">{{ showError.msg }}</p>
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