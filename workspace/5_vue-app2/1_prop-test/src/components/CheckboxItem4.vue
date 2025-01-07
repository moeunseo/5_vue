<template lang="">
    <!-- 부모에서 받아온 데이터를 화면에 렌더링
     props를 사용하지 않는다면, 
     오류가 발생하진 않지만 데이터를 제대로 못받기에 무시하고 undefined로 화면에 렌더링 -->
    <input type="checkbox" :checked='user.checked'> {{user.number}} {{user.name}}<br>
</template>
<script>
import User from '../user.js'

    export default {
        name: 'CheckboxItem4',
        props:  {
            // 타입 검사 중
            user: User
        }
    }
</script>
<style lang="">
    
</style>