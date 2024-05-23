//  라우터 사용시 필요한 라이브러리
import {createRouter, createWebHistory} from 'vue-router'
// 경로를 간단하게 사용하기 위해!
import Home from '@/pages/Home.vue'
import AddBook from '@/pages/AddBook.vue'
import BookList from '@/pages/BookListPage.vue'

const router = createRouter({
    history: createWebHistory(), //url 처리하는 함수
    routes: [
        {path: '/', component: Home},
        {path: '/add', component: AddBook},
        {path: '/list', component: BookList}
    ]
})

// 만든 라우터 바깥으로 뿌려주기
export default router