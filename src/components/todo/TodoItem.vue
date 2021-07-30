<template>
  <div class="todo-item">
    <input type="text" readonly :value="todo.title" />
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    props: {
      todo: {
        type: Object,
        required: true,
        default: () => ({ id: '', completed: false, title: '' }),
        validator: todo => ['id', 'completed', 'title'].every(key => key in todo),
      },
    },
  };
</script>