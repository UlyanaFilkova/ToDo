<script setup lang="ts">
import ToDoGroup from './ToDoGroup.vue'
import { ToDoStatus } from '@/types'
</script>

<template>
  <ToDoGroup :status="ToDoStatus.Pending" />
  <ToDoGroup :status="ToDoStatus.InProgress" />
  <ToDoGroup :status="ToDoStatus.Completed" />
</template>
