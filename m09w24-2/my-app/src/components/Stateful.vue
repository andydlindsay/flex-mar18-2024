<script setup>
import {ref} from 'vue';

const count = ref(0); // useState(0) { value: 0 }
const animals = ref(['skunk', 'baboon', 'snake', 'cat']);
const formData = ref({
  newAnimal: '',
  username: '',
  password: ''
});

// const increment = () => {
  // count.value++;
//   console.log('count is now', count.value);
// };
</script>

<template>
  <div>
    <h2>Playing with State!</h2>

    <div>
      <label>New animal:</label>
      <!-- <input 
        :value="newAnimal"
        @input="(e) => newAnimal = e.target.value"
      /> -->
      <input v-model="formData.newAnimal" />
      <button @click="animals.push(formData.newAnimal)">Add</button>
    </div>

    <ul>
      <li v-for="animal of animals">{{ animal }}</li>
    </ul>
  </div>
</template>
