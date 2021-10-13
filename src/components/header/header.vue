<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>
<style scoped>
@import "./header.css";
</style>
<script lang="ts">
import { defineComponent, ref } from "vue";
//导入接口类型
import { todo } from "../../type/todo";
export default defineComponent({
  props: {
    addtodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const title = ref("");

    const add = () => {
      if (title.value == "") {
        alert("请输入内容");
        return
      }
      const todo: todo = {
        id: Date.now(),
        title: title.value,
        isture: false,
      };
      props.addtodo(todo);
      title.value=''
    };

    return {
      add,
      title,
    };
  },
});
</script>
