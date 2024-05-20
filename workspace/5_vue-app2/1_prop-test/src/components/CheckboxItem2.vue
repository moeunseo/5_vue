<template lang="">
    <input type="checkbox" :checked='user.checked'> {{user.number}} - {{user.name}}<br>
</template>
<script>
    export default {
        name: 'CheckboxItem2',
        //데이터를 받아올 때 객체로 받으면 된다.
        props: ['user']
    }
</script>
<style lang="">
    
</style>