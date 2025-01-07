<template>
    <div class="todo-container">
        할일 입력: <input type="text" @keyup.enter="addTodo" v-model.trim="text" placeholder="입력하시오"><br>
        <ul v-if="todoList.length > 0" class="todo-list">
            <li v-for="(todo, index) in todoList" :key="index" class="todo-item">
                <input type="checkbox" v-model="checkedList[index]" class="todo-checkbox">
                <span :class="{completed: checkedList[index]}">{{todo}}</span>
            </li>
        </ul>
        <br>
    </div>
</template>
<script>
// 기본 내보내기 할 내용을 정의 가능
// 컴포넌트 등을 다른 파일에서 쉽게 가져와 사용할 수 있다.
    export default{
        name: 'CheckboxItem',
        data(){
            return{
                text: "",
                todoList: [],
                checkedList: []
            }
        },

        methods: {
            addTodo(){
                if(this.text.length > 0){
                    this.todoList.push(this.text)
                    this.checkedList.push(false)
                    this.text = ""
                }
            }
        },
    }
</script>
<!-- 컴포넌트 css추가 -->
<style scoped>
/* 컴포넌트 스타일 */
.todo-container {
    width: 300px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
}

.todo-input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.todo-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.todo-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.todo-checkbox {
    margin-right: 10px;
}

.completed {
    text-decoration: line-through;
    color: #888;
}

</style>