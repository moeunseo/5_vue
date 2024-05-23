<template lang="">
    <div>
        <h1>책 목록</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                <p>{{book.title}}</p><hr>
                <p>{{book.author}}</p><br>
                <button @click="removeBook(book.id)">삭제</button>
            </li>
        </ul>
    </div>
</template>
<script>
let i = 1
export default {
    name: "BookList",
    created() {
        this.emitter.on('add', this.addBook)
        this.loadBook()
    },
    data() {
        return {
            books:[]
        }
    },
    methods: {
        addBook(book){
            let newBook = {id: i++, title: book.title, author: book.author}
            this.books.push(newBook)
            this.saveBook()
        },

        removeBook(id){
            this.books = this.books.filter(book => id !== book.id)  
            this.saveBook()
        },

         // 로컬 스토리지에 저장하는 메소드
         // 스프링 들어가면 db라고 생각하면 된다.
         saveBook(){
            localStorage.setItem('books', JSON.stringify(this.books))
        },

        // 로컬 스토리지에서 데이터 가져오기
        loadBook(){
            let localBooks = localStorage.getItem('books')
            if(localBooks){
                this.books = JSON.parse(localBooks)
            }
        }
    },
}
</script>
<style lang="">
    
</style>