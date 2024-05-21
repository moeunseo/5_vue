<template lang="">
    <div>
        노래 제목: <input type="text" v-model="name">
        <!-- 클릭이벤트와 입력한 값이 넘겨진다. -->
        <button @click="$emit('inputCompleted', {name})">이벤트 발신</button>
    </div>
</template>
<script>
    export default {
        name: 'InputPopName',
        data() {
            return {
                name: ''
            }
        },
    }
</script>
<style lang="">
    
</style>