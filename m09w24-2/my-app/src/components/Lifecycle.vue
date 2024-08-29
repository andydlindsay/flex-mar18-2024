<script setup>
import {ref, onMounted, onUpdated, onUnmounted} from 'vue'
const count = ref(0);

onMounted(() => {
  console.log('the component has been mounted to the DOM');
}) // useEffect(() => {}, [])

onUpdated(() => {
  if (count.value >= 10) { count.value = 0 }
  console.log('the component has updated');
});

onUnmounted(() => {
  console.log('the component has been removed from the DOM');
});
</script>

<template>
  <div>
    <h2>Vue Lifecycle!!!</h2>
    <button @click="count++">Count is {{ count }}</button>
    <Child />
  </div>
</template>
