<template>
  <div class="container">
    <h1>Todo List (Pinia)</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script setup>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
</script>

<style>
body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  background-color: #f9f9f9;
}
.container {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 400px;
  text-align: center;
}
</style>
