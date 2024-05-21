<template lang="">
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