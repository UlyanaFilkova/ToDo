<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ToDoStatus, type ToDo } from '@/types'
import useTodos from '@/store/useTodos'

interface Props {
  status: ToDoStatus
}

const props = defineProps<Props>()

const shouldDisplayForm = ref(false)

const newToDo = reactive<Omit<ToDo, 'id'>>({
  title: '',
  description: '',
  status: props.status
})

const resetForm = () => {
  shouldDisplayForm.value = false
  newToDo.title = ''
  newToDo.description = ''
}

const { addNewTodo } = useTodos()

const handleOnSubmit = () => {
  if (newToDo.title === '' && newToDo.description === '') {
    return
  }
  addNewTodo({
    id: Math.random() * 100000000000000,
    ...newToDo
  })
  resetForm()
}
</script>

<template>
  <div>
    <button class="add-button" v-if="!shouldDisplayForm" @click="shouldDisplayForm = !shouldDisplayForm">
      Add New ToDo
    </button>
    <form v-else @submit.prevent="handleOnSubmit">
      <input
        class="form-title"
        v-model="newToDo.title"
        type="text"
        name=""
        id=""
        placeholder="Title"
      />
      <textarea
        class="form-description"
        v-model="newToDo.description"
        name=""
        id=""
        placeholder="Description"
      ></textarea>
      <div class="buttons">
        <button type="submit">Submit</button>
        <button type="button" @click="resetForm">Reset</button>
      </div>
    </form>
  </div>
</template>
