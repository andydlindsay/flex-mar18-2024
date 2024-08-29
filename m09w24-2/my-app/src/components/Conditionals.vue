<script setup>
const greeting = 'hi there';

const returningString = () => {
  return 'good to see you!';
};

const foods = ['pizza', 'sushi', 'tacos'];

const myFunc = () => {
  alert('the button was clicked');
};

const submitHandler = (event) => {
  // event.preventDefault();
  // event.stopPropagation();
  
  console.log('the form submitted');
};
</script>

<template>
  <div>
    <h2>Conditionals Component</h2>

    <button v-on:click="myFunc">Click me!</button>
    <button @click="myFunc">Click me!</button>

    <form @submit.prevent="submitHandler">
      <label>username</label>
      <input />
    </form>

    <h2 v-if="greeting === 'hello'">Show this element</h2>
    <p class="p" id="hello" v-else-if="greeting === 'hi there'">A wild paragraph shows up!</p>
    <div v-else>This is shown instead</div>
    
    <ul>
      <li v-for="(food, index) in foods">{{ food }}: {{ index }}</li>
    </ul>
  </div>
</template>
