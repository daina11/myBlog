<template>
    <div class="main-box">
       <div v-for="bdata in Bdata">
           <el-row >          
               <el-col  :span="22">
                   <div class="b">
                       <header class="a-header">
                           <h1>
                               <a href="" class="title">{{bdata.title}}</a>
                           </h1>
                           <h2>
                               <i class="el-icon-user-solid">发布于 </i>
                                <i class="el-icon-time">{{bdata.time}}●</i>
                                <i class="el-icon-view">围观{{bdata.look}}次●</i>
                                <i class="el-icon-star-on">{{bdata.like}}次点赞●</i>
                                <i class="el-icon-collection">{{bdata.collect}}次收藏</i>
                           </h2>
                       </header>
                       <div class="ul-label">
                           <a>EVENT</a>
                       </div>
                       <div class="title-two">
                           <h1>
                               {{bdata.title}}
                           </h1>
                       </div>
                        <div class="content">
                            <img :src="bdata.msg" alt="">
                        </div>
                        <div class="more">
                                <el-button size="small"  @click="toDetail(bdata.id)" ><a>阅读全文>>></a></el-button>
                        </div>
                    </div>
                </el-col>
           </el-row>
       </div>
       <el-pagination
        background
        layout="prev, pager, next"
        :total="20">
        </el-pagination>
       <Lfooter ></Lfooter>
       <back></back>
    </div>
</template>
<script>
import footer from '../components/Lfooter'
import backtop from '../components/backTop'
import data from '../../static/data.json'
export default {
   data(){
       to :false
       return{
       Bdata:data.blog
       }
   },
   created(){
    
  
   },
   methods:{
       toDetail(id){
           this.$router.push({
               path:'jobDetail/'+id,
               query:{Id:id}
           })

       }
       
   },
   components:{
        "Lfooter":footer,
        "back":backtop
    }
}


</script>

<style scoped lang="stylus">
.main-box
    
    width 100%
    height auto 
.b
    border-radius 5px  
    background-color #ffffff
    font-size 14px
    padding-left 5%
    padding-right 5%
    margin 0px 0 10px 0
    box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 5px 1px -5px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
.el-col
    
    display inline-block
    margin 50px 50px 5px 30px
    
.a-header
        h1
            text-align center
            margin 10px
            .title
                line-height 60px
                font-size 30px
                font-weight 300
                margin-bottom 20px
                color #696969
        h2
            text-align center
            line-height 24px
            color #555
            font-size 14px
            margin 10px 0
            i
                display inline-block       
.ul-label
    margin-top 30px
    a
        border-color #97dffd
        background-color #97dffd 
        position relative
        padding-left 30px
        padding-right 30px
        color #ffffff
        font-size 18px
        box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
        
.content
    padding-left 20%
    img 
        width auto
        height auto
        max-width 100%
        max-height 100%
        margin 10px
        
.title-two
    font-size 20px
    color #574c4c
    margin-bottom 10px
    margin-top 30px
.more
    text-align center
    .el-button
        background-color #97dffd 
        color #ffffff
        font-size 12px
        margin 10px 0 20px 0
        &:hover
           background-color #444
        a
            
            color #ffffff
            display block
            

.el-pagination
    text-align center  
    margin-top 15px         
</style>
