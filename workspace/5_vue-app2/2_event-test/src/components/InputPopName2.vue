<template lang="">
    <div>
        노래 제목: <input type="text" v-model="name">
        <!-- 클릭이벤트와 입력한 값이 넘겨진다. -->
        <button @click="checkName">이벤트 발신</button>
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
        methods: {
            // 유효성 검사 메소드
            checkName(){
                const checkType = typeof this.name === 'string' // 문자열이라면 true
                const checkLen = this.name.trim().length >= 2

                // this.name이 undefined인지 확인하기 위해 일반적으로 들어간다.
                if( this.name&&checkType&&checkLen){
                    this.$emit('inputCompleted', {name:this.name})
                    this.name = ''
                }
                else{
                    alert('두 글자 이상 입력해!')
                    this.name = ''
                }
            }
        },    
    }
</script>
<style lang="">
    
</style>