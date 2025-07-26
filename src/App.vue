<script setup lang='ts'>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <div class="app-container">
    <Header msg="Welcome to My Blog" />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<style scoped lang='scss'>
</style>
