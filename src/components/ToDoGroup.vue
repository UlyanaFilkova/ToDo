<script setup lang="ts">
import { computed } from 'vue'
import { ToDoStatus, ToDo } from '@/types.ts'
interface Props {
  status: ToDoStatus
}

const props = defineProps<Props>()

const groupLabel: string = computed(() => {
  switch (props.status) {
    case ToDoStatus.Pending:
      return 'Pending'
    case ToDoStatus.InProgress:
      return 'In Progress'
    case ToDoStatus.Completed:
      return 'Completed'
    default:
      return 'Others'
  }
})

const pendingTools: ToDo[] = [
  {
    id: 1,
    title: 'learn TS',
    description: 'Watch TypeScript Videos',
    status: ToDoStatus.Pending
  }
]
</script>

<template>
  <div>
    <h3>{{ groupLabel }}</h3>
    <ul>
      <li v-for="todo in pendingTools" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>
