<template lang="">
    <div>
        <h1>잘 받아 브로2~!</h1>
        <input type="text" v-model="data">
        <button @click="sendData">전송</button>

    </div>
</template>
<script>
    export default {
        name: 'Bro1',
        data(){
            return{
                data: ''
            }
        },
        methods: {
            sendData(){
                // main.js에서 전역으로 정의 에미터를 부른다!
                // 자식 간에는 props속성 전달은 어렵기에 emit 사용!
                this.emitter.emit('message', this.data)
                this.data = ""
            }
        },
    }
</script>
<style lang="">
    
</style>