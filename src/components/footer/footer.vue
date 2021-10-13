<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="footall" />全选
    </label>
    <span>
      <span>已完{{count}} </span> / 全部{{todos.length}}
    </span>
    <button  class="clearsllbtn" @click="clearall" >清除已完成任务</button>
  </div>
</template>
<style scoped>
@import"./footer.css";
</style>
<script lang="ts">
//导入接口类型
import { todo } from "../../type/todo";
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    todos: {
      type: Array as () => todo[],
      required:true
    },
    chickall:{
       type: Function,
      required:true
    },
    clearall:{
      type:Function,
      required:true
    }
  },
  setup(props) {
    const count = computed(() => {
      return props.todos.reduce(
        (pre, todo, index) => pre + (todo.isture ? 1 : 0),
        0
      );
    });
    const footall=computed({
      get(){
         return count.value>0&&props.todos.length===count.value
      } ,
      set(val){
       props.chickall(val)
      }
    })
    return {
      count,
      footall
    };
  },
});
</script>
