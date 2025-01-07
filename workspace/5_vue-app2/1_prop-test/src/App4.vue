<template lang="">
  <h1>회원 정보 조회</h1>
  <ul>
    <CheckboxItem v-for='user in users' :key='user.number' :user='user'/>
  </ul>
</template>
<script>
import CheckboxItem from './components/CheckboxItem4.vue'
import User from './user.js'

  export default {
    name: 'App4',
    components: {CheckboxItem},

    data(){
      return{
        users: [
          // 값을 넘기지 않으면 undefined로 정의! 즉, false값
          new User(1, '모은서', true),
          new User(2, '김원필'),
          new User(3, '이창섭', true),
          new User(4, '육성재')
        ]
      }
    }
}
</script>
<style lang="">
  
</style>