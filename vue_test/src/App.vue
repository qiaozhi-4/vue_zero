<template>
    <div>
        <h1 v-text="masg"></h1>
        <button @click='showDOM'>点我输出上方 DOM 元素</button>
        <school/>
    </div>
</template>

<script>
    //引入 School 组件
    import School from './components/School.vue'
    export default {
        name: 'App',
        components: { School },
        data() {
            return {
                masg: '你好'
            }
        },
        methods: {
            showDOM(){
                console.log('hhhh')
            }
        },
    }
</script>

<style>

</style>