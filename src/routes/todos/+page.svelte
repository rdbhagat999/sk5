<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import TodoComponent from '$lib/components/TodoComponent.svelte';
  import type { TodoModel } from '$lib/model/todo.model';

  let todos: TodoModel[] = $state.raw([
    {id: 1, text: "Todo 1", done: false},
    {id: 2, text: "Todo 2", done: true},
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

  // $effect(() => {
  //   console.log("todos", todos)
  // })
</script>

<PageTitle title="Todos"/>

<h1 class="text-2xl">Todos Page</h1>

<div class="add-todo w-full flex justify-center items-center gap-4 mt-4">
    <input class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="add-todo" type="text" placeholder="add todo" onkeydown={addTodo} />
</div>

<div class="todos flex flex-col justify-center items-center gap-4 mt-10">
    {#each todos as item, i (item)}
      <TodoComponent index={i} item={item} editTodo={editTodo} toggleTodo={toggleTodo}/>
    {/each}
</div>
