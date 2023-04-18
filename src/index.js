import m from "mithril"
import { TodoList } from "./TodoList"

m.mount(document.getElementById("app"), {
  view: () => (
    <div class="bg-stone-800 min-h-screen h-full flex items-center">
      <TodoList />
    </div>
  ),
})

if (window.DEV_MODE) {
  // enable live reload in dev mode
  new EventSource("/esbuild").addEventListener("change", () => location.reload())
}
