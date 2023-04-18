import m from "mithril"
import { todoStore, addTodo, onTodoInput } from "./store/todos"

export const TodoList = () => {
  return {
    view: () => {
      const { todos, todo } = todoStore.get()

      return (
        <div class=" px-8 py-4 rounded border-stone-200 border-2 w-full max-w-3xl h-80 mx-auto my-auto">
          <h1 class="text-red-300 mb-2">Todo List</h1>
          <input
            type="text"
            value={todo}
            oninput={({ target }) => onTodoInput(target.value)}
            onkeydown={({ key }) => {
              if (key === "Enter") {
                addTodo()
              }
            }}
          />
          <ul class="text-slate-300 mt-3 list-disc">
            {todos.map((t) => (
              <li>{t}</li>
            ))}
          </ul>
        </div>
      )
    },
  }
}
