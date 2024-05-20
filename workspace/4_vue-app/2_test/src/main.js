// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 전역 컴포넌트 설정
import CheckboxItem from './components/CheckboxItem.vue'
createApp(App)
.component('CheckboxItem', CheckboxItem)
.mount('#app')

// 지역 컴포넌트 설정
// createApp(App).mount('#app')