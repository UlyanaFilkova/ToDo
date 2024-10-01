<script setup lang="ts">
import { computed } from 'vue'
import { ToDoStatus, type ToDo } from '@/types'
import useTodos from '@/store/useTodos'
import Draggable from 'vuedraggable'
import CreateTodo from './CreateTodo.vue'

interface Props {
  status: ToDoStatus
}

const props = defineProps<Props>()

const groupLabel = {
  [ToDoStatus.Pending]: 'Pending',
  [ToDoStatus.InProgress]: 'In Progress',
  [ToDoStatus.Completed]: 'Completed'
}

const { getTodosByStatus, deleteTodo } = useTodos()
const todoList = getTodosByStatus(props.status)
</script>

<template>
  <div class="group-wrapper">
    <h3>{{ groupLabel[props.status] }}</h3>
    <Draggable class="draggable" :list="todoList" group="todos" itemKey="id">
      <template #item="{ element: todo }">
        <li>
          {{ todo.title }}
          <span class="delete-icon" @click="deleteTodo(todo)">x</span>
          <p class="todoDescription">{{ todo.description }}</p>
        </li>
      </template>
    </Draggable>
    <CreateTodo :status="props.status" />
  </div>
</template>
