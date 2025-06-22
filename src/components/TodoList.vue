<template>
  <div>
    <h3>{{ counter.name }}</h3>
    <p>Nilai saat ini: {{ counter.count }}</p>
    <p>Nilai ganda: {{ counter.doubleCount }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/todoStore'

// Gunakan store di dalam komponen
const counter = useCounterStore()
</script>
