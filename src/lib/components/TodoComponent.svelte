<script lang="ts">
  import type { TodoModel } from '$lib/model/todo.model';
  const { index, item, editTodo, toggleTodo }: { index: number, item: TodoModel, editTodo: (event: Event) => void, toggleTodo: (event: Event) => void} = $props()
</script>

<div class="todo">
  <label for={`todo-title-${index}`}>{index+1}</label>
  <input id={`todo-title-${index}`} type="text" data-index={index} value={item.text} oninput={editTodo}/>
  <input type="checkbox" name="todo-done" data-index={index} checked={item.done} onchange={toggleTodo}/>
</div>
