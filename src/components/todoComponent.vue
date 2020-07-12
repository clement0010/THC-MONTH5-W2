<template>
  <div id="todo">
    <h1>Todo List</h1>
    <input placeholder="Add a todo" v-model="title" @keypress.enter="addTodo" />
    <ul v-for="(todo, index) in todoList" :key="index">
      <li>{{ todo.id }}. {{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todoList: [],
        id: null,
        title: '',
      };
    },
    // Load data with mounted

    methods: {
      addTodo: function() {
        this.id = ++this.id;
        this.todoList.push({
          id: this.id,
          isComplete: false,
          title: this.title,
        });
        this.title = '';
      },
    },
  };
</script>
