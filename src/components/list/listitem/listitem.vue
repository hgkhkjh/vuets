<template>

  <li class="itli">
    <label>
      <input
        type="checkbox"
        v-model="isture"
      />
      <span>{{todos.title}}</span>
    </label>
    <button
      class="btn btn-danger"
      @click="deletetodoitem"
    >删除</button>
  </li>

</template>
<style scoped>
@import "./listitem.css";
</style>
<script lang="ts">
import { computed, defineComponent, } from "vue";
//导入接口类型
import { todo } from "../../../type/todo";
export default defineComponent({
  props: {
    //定义todos的类型是自己定义的todo接口
    todos: {
      type:Object as () => todo,
      required: true,
    },
    index: Number,
    deletetodo: {
      type: Function,
      required: true,
    },
    updatetodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    //定义一个点击事件把每个item的index传过去
    const deletetodoitem = () => {
      // alert("asdsa")
      // console.log(props.todos);
      if (window.confirm("确定删除吗，亲~")) {
        props.deletetodo(props.index);
        // alert(props.deletetodo)
      }
    };
    //定义一个计算属性来把isture传过去让app.vue来控制
    const isture =computed({
      get(){
      return props.todos.isture
      },
      set(val){
            props.updatetodo(props.todos,val)
      } 
    })
    
    return {
      deletetodoitem,
      isture,
    };
  },
});
</script>