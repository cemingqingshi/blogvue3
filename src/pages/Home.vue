<script setup name='Home' lang='ts'>
import {useCountStore} from '@/stores/count'
const countStore = useCountStore()
function increment() {
    countStore.increment()
}
</script>
<template>
    <div>
        <h1>home{{ countStore.count }}</h1>
        <button class="bg-sky-500" @click="increment">+1</button>
    </div>
</template>
<style scoped lang='scss'>
</style>