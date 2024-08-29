<script setup>
import Conditionals from './components/Conditionals.vue';
import Heading from './components/Heading.vue';
import Stateful from './components/Stateful.vue';
import BindingProps from './components/BindingProps.vue';
import Lifecycle from './components/Lifecycle.vue';

import {ref} from 'vue'
const isShown = ref(false);
</script>

<template>
  <h2>Intro to Vue</h2>
  <label>isShown</label>
  <input type="checkbox" v-model="isShown" />

  <!-- <Conditionals /> -->

  <!-- <Heading message="Welcome to our site!" /> -->
  <!-- <Heading message="About us!" /> -->
  <!-- <Heading message="using slots!!!">
    <h2>Inside the opening tag</h2>
    <p>More stuff here!</p>
  </Heading> -->

  <!-- <Stateful /> -->

  <!-- <BindingProps /> -->

  <Lifecycle v-if="isShown" />
</template>
