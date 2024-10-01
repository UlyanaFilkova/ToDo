import { type ToDo, ToDoStatus } from '@/types'
import { computed, reactive } from 'vue'

interface TodoStore {
  [ToDoStatus.Pending]: ToDo[]
  [ToDoStatus.InProgress]: ToDo[]
  [ToDoStatus.Completed]: ToDo[]
}

const defaultValue = {
  [ToDoStatus.Pending]: [
    {
      id: 1,
      title: 'learn TS',
      description: 'Watch TypeScript Videos',
      status: ToDoStatus.Pending
    },
    {
      id: 2,
      title: 'learn TS',
      description: 'Watch TypeScript Videos',
      status: ToDoStatus.Pending
    }
  ],
  [ToDoStatus.InProgress]: [],
  [ToDoStatus.Completed]: []
}

const todoStore = reactive<TodoStore>(defaultValue)

export default () => {
  const getTodosByStatus = (todoStatus: ToDoStatus) => {
    return computed(() => todoStore[todoStatus])
  }

  const updateTodoStatus = (todo: ToDo, newStatus: ToDoStatus) =>{
    todo.status = newStatus;
  }
  const addNewTodo = (todo: ToDo) => {
    todoStore[todo.status].push(todo);
  }
  const deleteTodo = (todo: ToDo) => {
    todoStore[todo.status] = todoStore[todo.status].filter((item) => item.id !== todo.id);
  }
  return { getTodosByStatus, addNewTodo, deleteTodo, updateTodoStatus }
}
