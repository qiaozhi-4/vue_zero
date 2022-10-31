<template>
  <li>
    <label>
        <input type="checkbox" :checked="todoInfo.done" @change="handleCheck(todoInfo.id)"/>
        <!-- <input type="checkbox" v-model="todoInfo.done"/> -->
        <span>{{todoInfo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoInfo.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name: 'MyItem',
    props:['todoInfo','checkTodo','deleteTodo'],
    methods: {
			//勾选or取消勾选
			handleCheck(id){
				//通知App组件将对应的todo对象的done值取反
				this.checkTodo(id)
			},
			//删除一行
			handleDelete(id){
				//通知App组件将对应的todo对象删除
				//this.deleteTodo(id)
        if(confirm('确定删除吗？')) this.deleteTodo(id)
      },
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
  li:hover{
    background-color: rgb(155, 150, 150);
  }
  li:hover button{
    display: block;
  }
</style>