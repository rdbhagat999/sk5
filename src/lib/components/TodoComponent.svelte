<script lang="ts">
  import type { TodoModel } from '$lib/model/todo.model';
  const { index, item, editTodo, toggleTodo }: { index: number, item: TodoModel, editTodo: (event: Event) => void, toggleTodo: (event: Event) => void} = $props()

  let cls = $state("")

  let isDone = $state(item.done)

  $effect(() => {

    cls = "";

    if(isDone) {
      cls = "disabled:cursor-not-allowed disabled:line-through";
    }
  })
</script>

<div class="todo w-full flex justify-center items-center gap-4 peer">
  <input class={`${cls} peer w-full bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark.text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`} id={`todo-title-${index}`} type="text" data-index={index} value={item.text} disabled={isDone} oninput={editTodo}/>
  <input class="peer" type="checkbox" name="todo-done" data-index={index} bind:checked={isDone} onchange={toggleTodo}/>
</div>
