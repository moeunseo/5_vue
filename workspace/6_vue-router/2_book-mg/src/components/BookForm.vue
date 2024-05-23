<template lang="">
    <div>
        <form @submit.prevent="addBook">
            <input type="type" v-model="title" placeholder="Title" required>
            <input type="type" v-model="author" placeholder="Author" required>
            <button type="submit">추가하기</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "BookForm",
    data() {
        return {
            title: '',
            author: ''
        }
    },
    methods: {
        addBook(){
            // 객체로 저장
            let book = {
                title: this.title,
                author: this.author
            }
            this.emitter.emit('add', book)
            this.title = ''
            this.author = ''
        }
    },
}
</script>
<style lang="">
    
</style>