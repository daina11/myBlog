<template>
<div>
<home></home>
</div>
</template>

<script >
import '../static/js/click'
import home from './components/home/home'
export default{
     data(){
        return{
            seller:{}
        }
    },
created(){
    this.$http.get("api/blog").then((res)=>{
    this.seller=res.data
    },
        (err)=>{ 
    
    })
},
components:{
        home
    }
    
}
</script>

<style coped lang="stylus">

</style>
