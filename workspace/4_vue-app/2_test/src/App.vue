<template>
  <!-- <CheckboxItem /> -->
  <h1>App 테스트</h1>
  <ul>
    <CheckboxItem />
    <CheckboxItem />
    <CheckboxItem />
    <CheckboxItem />
  </ul>
</template>
<script>
// 지역 컴포넌트 등록 시에는 주석 해제
  // import CheckboxItem from './components/CheckboxItem.vue'
    export default{
        name: 'App', //root컴포넌트 이름
        // 지역 컴포넌트 등록 시에는 주석 해제
        // components: {CheckboxItem}
    }
</script>
<style lang="">

</style>