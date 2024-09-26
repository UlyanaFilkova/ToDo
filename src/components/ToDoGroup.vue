<script setup lang="ts">
import { computed } from 'vue'
import { ToDoStatus, type ToDo } from '@/types'
import useTodos from '@/store/useTodos'

interface Props {
  status: ToDoStatus
}

const props = defineProps<Props>()

const groupLabel = {
  [ToDoStatus.Pending]: 'Pending',
  [ToDoStatus.InProgress]: 'In Progress',
  [ToDoStatus.Completed]: 'Completed'
}

const { getTodosByStatus } = useTodos()
const todoList = getTodosByStatus(props.status)
</script>

<template>
  <div>
    <h3>{{ groupLabel[props.status] }}</h3>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>
