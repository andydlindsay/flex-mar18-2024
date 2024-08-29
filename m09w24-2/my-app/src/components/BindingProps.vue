<script setup>
import Child from './Child.vue';

import {ref} from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    <h2>Binding Props</h2>
    <!-- <h2>Count is {{ count }}</h2> -->
    <button @click="count++">Click me!</button>
    
    <Child :count="count" />
  </div>
</template>
