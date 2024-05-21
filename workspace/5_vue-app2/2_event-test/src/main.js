// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// 에미터 사용할 시 밑에 걸로 하자~
import { createApp } from 'vue'
import App from './App2.vue'

// 라이브러리 가져오기
// 라이브러리를 사용하기 위해선 app을 생성할 때마다 npm install mitt를 해줘야 한다.
import mitt from 'mitt'

// 에미터 인스턴스 생성
const emitter = mitt()

// 생성한 애플리케이션을 전역으로 설정!
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.mount('#app')