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
  import axios from 'axios';

  export default {
    data() {
      return {
        todoList: [],
        id: null,
        title: '',
      };
    },
    // Load data with mounted
    async mounted() {
      const result = await axios.get('http://localhost:3000/todos');
      console.log('result', result.data);
      this.todoList = result.data;
    },

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
