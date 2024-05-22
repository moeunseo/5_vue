//  라우터 사용시 필요한 라이브러리
import {createRouter, createWebHistory} from 'vue-router'
// 경로를 간단하게 사용하기 위해!
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import FAQs from '@/pages/FAQs.vue'
import Features from '@/pages/Features.vue'
import Pricing from '@/pages/Pricing.vue'
import TodoListsBox from '@/pages/TodoListBox.vue'


const router = createRouter({
    history: createWebHistory(), //url 처리하는 함수
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/faqs', component: FAQs},
        {path: '/features', component: Features},
        {path: '/pricing', component: Pricing},
        {path: '/todolistsbox', component: TodoListsBox}
    ]
})

// 만든 라우터 바깥으로 뿌려주기
export default router