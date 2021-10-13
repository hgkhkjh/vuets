<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div id="root">
    <div className="todo-container">
      <div className="todo-wrap">
        <Header :addtodo="addtodo"/>
        <List :todos="state.todos" :deletetodo="deletetodo" :updatetodo="updatetodo"/>
        <Footer :todos="state.todos" :chickall="chickall" :clearall="clearall"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from "vue";
import Footer from "./components/footer/footer.vue";
import Header from "./components/header/header.vue";
import List from "./components/list/list.vue";
//导入接口类型
import {todo} from "./type/todo"
//导入缓存文件
import {savetodos,readtodos} from "./until/localStorageUtils"
export default defineComponent({
  components: { List, Header, Footer },
  setup() {
    
    const state = reactive<{todos:todo []}>({
      todos: [
        { id: 1, title: "吃饭", isture: true },
        { id: 2, title: "睡觉", isture: false },
        { id: 3, title: "打游戏", isture: false },
        { id: 4, title: "打代码", isture: true },
      ],
    });
    //定义一个方法用来接收输入框里面传来的数据并把它加到state.todos里面面
    const addtodo=(todo:todo)=>{
      state.todos.unshift(todo)
    }
      console.log(state.todos);
   //定义一个改变istrue的方法
    const updatetodo=(todo:todo,is:boolean)=>{
         todo.isture=is
    }
    //定义一个删除的方法
    const deletetodo=(index:number)=>{
      state.todos.splice(index,1)
    }
   //定义全选全不选的方法
   const chickall=(iss:boolean)=>{
    state.todos.forEach((a)=>{
       a.isture= iss
    })
   }
   //定义清楚选中的方法
  const clearall=()=>{
    state.todos= state.todos.filter(a=>!a.isture)
  }
  watch(()=>state.todos,savetodos,{deep:true})
  onMounted(()=>{
    setTimeout(()=>{
    state.todos=readtodos()
    },1000)
  })
    return {
      state,
      addtodo,
      deletetodo,
      updatetodo,
      chickall,
      clearall
    };
  },
});
</script>

<style>
@import "./App.css";
</style>