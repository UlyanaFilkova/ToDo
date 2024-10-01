<script setup lang="ts">
import ToDoGroup from './ToDoGroup.vue'
import { ToDoStatus } from '@/types'
</script>

<template >
  <div class="groups-wrapper">
    <ToDoGroup :status="ToDoStatus.Pending" />
    <ToDoGroup :status="ToDoStatus.InProgress" />
    <ToDoGroup :status="ToDoStatus.Completed" />
  </div>
</template>

