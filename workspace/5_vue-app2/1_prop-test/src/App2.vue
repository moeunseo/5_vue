<template lang="">
  <h1>회원 정보 조회</h1>
  <ul>
    <!-- 객체 전체를 넘겨보기 -->
    <CheckboxItem v-for='user in users' :key='user.number' :user='user' />
  </ul>
</template>
<script>
import CheckboxItem from './components/CheckboxItem2.vue'
  export default {
    name: 'App2',
    components: {CheckboxItem},

    data(){
      return{
        users: [
          {number: 1, name: '모은서', checked: true},
          {number: 2, name: '김원필'},
          {number: 3, name: '이창섭', checked: true},
          {number: 4, name: '육성재'}
        ]
      }
    }
}
</script>
<style lang="">
  
</style>