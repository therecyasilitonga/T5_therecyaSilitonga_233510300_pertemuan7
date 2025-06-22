// File: src/stores/todoStore.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),

  getters: {
    incompleteCount: (state) => state.todos.filter(todo => !todo.completed).length
  },

  actions: {
    addTodo(title) {
      if (title.trim()) {
        this.todos.push({
          id: Date.now(),
          title,
          completed: false
        });
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    toggleComplete(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) todo.completed = !todo.completed;
    }
  }
});
