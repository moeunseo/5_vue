<template lang="">
    <input type="checkbox" :checked='checked'> {{number}} {{name}}<br>
</template>
<script>
    export default {
        name: 'CheckboxItem',
        // 해당 부모에서 v-for한 속성값을 가져온다.
        props: ['name', 'checked', 'number']
    }
</script>
<style lang="">
    
</style>