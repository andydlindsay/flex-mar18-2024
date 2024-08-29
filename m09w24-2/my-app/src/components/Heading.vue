<script setup>
const props = defineProps(['message', 'age', 'myFunc'])

const message = 'does this work??'

// defineProps({
//   message: String,
//   age: Number,
//   myFunc: Function,
// });

// defineProps({
//   message: {
//     type: String,
//     required: true,
//     defaultValue: 'hello world'
//   }
// });
</script>

<template>
  <div>
    <h2>{{ props.message }}</h2>
    <slot />
  </div>
</template>
