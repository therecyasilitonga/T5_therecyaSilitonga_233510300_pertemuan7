<template>
  <div>
    <button @click="counter.increment()">Tambah (+)</button>
    <button @click="counter.decrement()">Kurang (-)</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/todoStore'

const counter = useCounterStore()
</script>
