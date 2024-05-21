<template lang="">
  <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
  <div>
      <div id="app" class="container">
          <div class="card card-body bg-light">
              <div class="title">:: Todolist App</div>
          </div>
          <div class="card card-default card-borderless">
              <div class="card-body">
                <InputCom />
                <TodoList :todoList='todoList' />
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import TodoList from './components/TodoList.vue'
import InputCom from './components/InputCom.vue'

  let i = 4
  export default {
    name : 'App',
    components: {TodoList, InputCom},
    created() {
      this.emitter.on('add', this.addTodo)
    },
    data(){
        return {
            todoList : [
                { id : 1, plan : "복습", completed: true },
                { id : 2, plan : "저녁하기", completed: true },
                { id : 3, plan : "쇼핑하기", completed: false }
            ]
        }
    },
    methods: {
        // 1. 추가하기
        addTodo(todo){
            this.todoList.push({id: i++, plan: todo, completed: false})
            this.todo = ''
        },
        // 2. 삭제하기
        // filter, 해당 id가 아닌 것만 남기기
        // 매개변수는 삭제를 클릭한 객체의 id가 넘어와야 한다.
        todoDelete(id){
            // 매개변수로 넘어온 id의 객체를 제외하고 나머지 객체를 가지고 온다!
            this.todoList = this.todoList.filter(todolistId => id !== todolistId.id)
        },
        // 3. 완료하기
        // 해당 객체의 complete를 반전
        // findIndex(콜백함수)
        toggleCompleted(id){
            let index = this.todoList.findIndex((item) => id === item.id);
            this.todoList[index].completed = !this.todoList[index].completed;
        }
    },
  }
</script>
<style lang="">
  
</style>