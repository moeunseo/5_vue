<template lang="">
    <li class="list-group-item" :class="{ 'list-group-item-success': item.completed }">
        <span class="pointer" @click="toggleCompleted(item.id)" :class="{'todo-done' : item.completed}">{{item.plan}} {{item.completed ? '(완료)' : ''}}</span>
        <span class="float-end badge bg-secondary pointer" @click="todoDelete(item.id)">삭제</span>
    </li>
</template>
<script>
    export default {
        name: "Item",
        props: {
            item:{
                type: Object,
                required: true
            }
        }
    }
</script>
<style lang="">
    
</style>