<template>
    <div>
        <h1> {{title}} </h1>
        <span> {{rating}} </span>
        <button @click="fun">点击收藏</button>
    </div>
</template>

<script>
// export导出，与外部import导入相对应
export default {
    name: "电影",
    // props自定义属性，外界可以作为标签使用并传递值进来
    props: ["title", "rating"],
    data:function(){
        return{
            
        }
    },
    methods:{
        fun(){
            alert("收藏成功")
        }
    }
}
</script>
