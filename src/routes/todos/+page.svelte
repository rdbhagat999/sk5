<script lang="ts">
  import TodoComponent from '$lib/components/TodoComponent.svelte';
  import type { TodoModel } from '$lib/model/todo.model';
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props()

  let todos: TodoModel[] = $state.raw([
    {id: 1, text: "Todo 1", done: false},
    {id: 2, text: "Todo 2", done: false},
    {id: 3, text: "Todo 3", done: false},
  ])
  
  const addTodo = (event: KeyboardEvent) => {
    if(event.key.toLocaleLowerCase() !== "enter") {
        return;
    }

    const todoEl = event?.target as HTMLInputElement

    if(todoEl?.value?.trim()?.length) {
        const todo:TodoModel = {
            id: new Date().getTime(),
            text: todoEl?.value?.trim(),
            done: false
        }

        todos = [...todos, todo]
        todoEl.value = ""
    }
   
  }

  const editTodo = (event: Event) => {
    const inputEl = event.target as HTMLInputElement
    const index = +inputEl.dataset.index!

    const todoList = [...todos]

    if(inputEl?.value?.trim()?.length) {
        todoList[index].text = inputEl?.value?.trim();
    }

    todos = [...todoList]
  }

  const toggleTodo = (event: Event) => {
    const inputEl = event.target as HTMLInputElement
    const index = +inputEl.dataset.index!

    const todoList = [...todos]

    todoList[index].done = !todoList[index].done;

    todos = [...todoList]
  }

  $effect(() => {
    console.log("todos", todos)
  })
</script>

<div class="add-todo">
    <input id="add-todo" type="text" placeholder="add todo" onkeydown={addTodo} />
</div>

<div class="todos">
    {#each todos as item, i}
      <TodoComponent index={i} item={item} editTodo={editTodo} toggleTodo={toggleTodo}/>
    {/each}
</div>
