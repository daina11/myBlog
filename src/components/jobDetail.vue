<template>
<div class="bg-box">
    <div class="main-box">
    <div class="content">
        <div class="title">{{Bdata.title}}</div>
        <div class="content-t">{{Bdata.content}}</div>
        <div class="one">
            <h1>一丶：{{Bdata.titleOne}}</h1>
            <span>{{Bdata.contentOne}}</span>
             <img :src="Bdata.msgOne" alt="">
        </div>
        <div class="two">
            <h1>二丶：{{Bdata.titleTwo}}</h1>
            <span>{{Bdata.contentTwo}}</span>
             <img :src="Bdata.msgTwo" alt="">
        </div>
        <div class="three">
            <h1>三丶：{{Bdata.titleThree}}</h1>
            <span>{{Bdata.contentThree}}</span>
            <img :src="Bdata.msgThree" alt="">
        </div>
    </div>
    <Lfooter></Lfooter>
    <back></back>
    </div>
    
</div>
</template>
<script>
import footer from "../components/Lfooter"
import backtop from "../components/backTop"
import data from '../../static/data.json'
export default {
    data(){
        return{
            Bdata:{},
            id:this.$route.query.Id,
            
        }       
    },
    mounted:{
  
    },
   created(){
    var id = this.id
    for(var i=0;i<data.blog.length;i++){
    var nop = data.blog[i]
    if(nop.id==id){
    this.Bdata=nop
    }
}
    },
   components:{
        "Lfooter":footer,
        "back":backtop
    }  
}
</script>
<style scoped lang="stylus">
.bg-box
    width 100%
    height auto
.main-box
    margin 30px 50px 5px 30px
.content
    border-radius 5px  
    background-color #ffffff
    font-size 1.45em
    padding-left 5%
    padding-right 5%
    margin 0px 0 10px 0
    box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 5px 1px -5px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
.title
    text-align center
    font-size 1.15em
    color #574c4c
    font-weight 350
    padding 20px 0 20px 0
.content-t
    font-size 1.25em
    margin 10px 10px 10px 10px
    line-height 50px

h1
    color #574c4c
    font-size 1em
    margin 10px 10px 10px 10px
    line-height 40px
    background-color #eaeaea
    width auto 
    height auto 

span 
    font-size 16px
    line-height 0.85em
    color #574c4c
    margin 10px 10px 10px 10px
    text-align center
.one
    padding-bottom 50px

.two
    padding-bottom 50px
.three
    padding-bottom 50px
    
img 
        width 80%
        height auto
        max-width 100%
        max-height 100%
        margin 10px
</style>