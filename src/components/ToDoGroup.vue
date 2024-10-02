<script setup lang="ts">
import { computed } from 'vue'
import { ToDoStatus, type ToDo } from '@/types'
import useTodos from '@/store/useTodos'
import Draggable from 'vuedraggable'
import CreateTodo from '@/components/CreateTodo.vue'

interface Props {
  status: ToDoStatus
}

const props = defineProps<Props>()

const groupLabel = {
  [ToDoStatus.Pending]: 'Pending',
  [ToDoStatus.InProgress]: 'In Progress',
  [ToDoStatus.Completed]: 'Completed'
}

const { getTodosByStatus, deleteTodo, updateTodoStatus } = useTodos()
const todoList = getTodosByStatus(props.status)

const onDraggableChange = (payload: any) => {
  if (payload?.added?.element) {
    updateTodoStatus(payload?.added?.element, props.status)
  }
}
</script>

<template>
  <div class="group-wrapper">
    <h3>{{ groupLabel[props.status] }}</h3>
    <Draggable
      class="draggable"
      :list="todoList"
      group="todos"
      itemKey="id"
      @change="onDraggableChange"
    >
      <template #item="{ element: todo }">
        <li>
          <span class="todoTitle">{{ todo.title }}</span>
          <span class="delete-icon" @click="deleteTodo(todo)">x</span>
          <p class="todoDescription">{{ todo.description }}</p>
        </li>
      </template>
    </Draggable>
    <CreateTodo :status="props.status" />
  </div>
</template>
