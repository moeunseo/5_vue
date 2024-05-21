<template lang="">
     <div>
        <h1>받음ㅋ 브로~!</h1>

        <h3>받은 데이터: {{receiveData}}</h3>
    </div>
</template>
<script>
    export default {
        name: "Bro2",
        
        // 컴포넌트가 만들어지는 순간 제일 먼저 실행되는 메소드!
        created(){
            this.emitter.on('message', this.handler)
        },
        data() {
            return {
                receiveData: ''
            }
        },
        methods: {
            handler(data){
                this.receiveData = data
            }
        },
    }
</script>
<style lang="">
    
</style>
