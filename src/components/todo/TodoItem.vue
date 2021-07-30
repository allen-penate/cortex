<template>
  <div class="v-input field theme--light v-text-field v-text-field--is-booted v-text-field--enclosed v-text-field--outlined v-text-field--placeholder" >
    <input type="text" readonly :value="todo.title" />
    <v-divider></v-divider>
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