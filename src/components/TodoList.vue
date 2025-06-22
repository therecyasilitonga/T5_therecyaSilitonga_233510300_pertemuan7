<template>
  <ul>
    <li v-for="todo in store.todos" :key="todo.id" class="todo-item">
      <input type="checkbox" v-model="todo.completed" @change="store.toggleComplete(todo.id)" />
      <span :class="{ done: todo.completed }">{{ todo.title }}</span>
      <button @click="store.deleteTodo(todo.id)">Hapus</button>
    </li>
    <p><strong>{{ store.incompleteCount }}</strong> tugas belum selesai</p>
  </ul>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore';
const store = useTodoStore();
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
