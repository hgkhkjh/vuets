<template>
  <ul className="todo-main">
    <Listitem
      v-for="(todos,index) in todos"
      :key="todos.id"
      :todos='todos'
      :deletetodo="deletetodo"
      :index="index"
      :updatetodo="updatetodo"
    ></Listitem>
  </ul>
</template>
<style scoped>
@import "./list.css";
</style>
<script lang="ts">
import Listitem from "./listitem/listitem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Listitem,
  },
  props: {
    todos: {
      type: Object,
      required: true,
    },
    deletetodo: {
      type: Function,
    },
    updatetodo:{
      type:Function,
      requirtd:true
    }
  },
  setup() {},
});
</script>