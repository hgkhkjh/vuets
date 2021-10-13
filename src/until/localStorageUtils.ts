import { todo } from "@/type/todo";
//保存数据到浏览器中
export function savetodos(todos:todo []){
    localStorage.setItem('todo_key',JSON.stringify(todos))
}
//从浏览器的缓存中读取数据
export function readtodos():todo []{
    return JSON.parse(localStorage.getItem('todo_key')||'[]')
}