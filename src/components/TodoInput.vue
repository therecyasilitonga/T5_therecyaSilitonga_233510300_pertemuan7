<template>
  <div class="form">
    <input v-model="title" placeholder="Tambah todo baru..." @keyup.enter="submit" />
    <button @click="submit">Tambah</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

const store = useTodoStore();
const title = ref('');

const submit = () => {
  store.addTodo(title.value);
  title.value = '';
};
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 6px;
}
button {
  padding: 6px 12px;
}
</style>
