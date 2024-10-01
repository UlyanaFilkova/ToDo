<script setup lang="ts">
import { computed } from 'vue'
import { ToDoStatus, type ToDo } from '@/types'
import useTodos from '@/store/useTodos'
import Draggable from 'vuedraggable'

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
  <div class="group-wrapper">
    <h3>{{ groupLabel[props.status] }}</h3>
    <Draggable class="draggable" :list="todoList" group="todos" itemKey="id">
      <template #item="{element: todo}">
        
        <li>
          {{ todo.title }}
          <p class="todoDescription">{{ todo.description }}</p>
        </li>
      </template>
    </Draggable>
    
  </div>
</template>
