import { map, action } from "nanostores"

export const todoStore = map({ todos: [], todo: "" })

export const onTodoInput = action(todoStore, "onTodoInput", (store, input) => {
  console.log(input, "input")
  store.setKey("todo", input)
})

export const addTodo = action(todoStore, "addTodo", (store) => {
  store.setKey("todos", [...store.get().todos, store.get().todo])
  store.setKey("todo", "")
})
