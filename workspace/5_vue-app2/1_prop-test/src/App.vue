<template lang="">
  <h1>회원 정보 조회</h1>
  <ul>
    <CheckboxItem v-for='user in users' :key='user.number'
      :number='user.number' :name='user.name' :checked='user.checked' />
  </ul>
</template>
<script>
import CheckboxItem from './components/CheckboxItem.vue'
  export default {
    name: 'App',
    components: {CheckboxItem},

    data(){
      return{
        users: [
          {number: 1, name: '모은서', checked: true},
          {number: 2, name: '박지민'},
          {number: 3, name: '이창섭', checked: true},
          {number: 4, name: '육성재'}
        ]
      }
    }
}
</script>
<style lang="">
  
</style>