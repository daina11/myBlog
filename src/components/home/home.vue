<template>
<el-container>
    <el-container class="l-col">
        <el-aside :span="24">
            <div class="all-top">
                <div class="top" :span="24">
                    <div class="mercury"></div>
                    <div class="venus"></div>
                    <div class="earth"></div>
                    <div class="mars"></div>
                    <div class="jupiter"></div>
                </div>
                <div :span="24">
                    <el-avatar   fit="fill"  class="avatar"></el-avatar>
                </div>
                <div :span="24" >
                        <el-link :underline="false" class="blogName" >Daina-Blog</el-link>
                </div>
            </div>
             <el-menu router="true" :span="24">
                 <el-menu-item index="/indexBlog"  class="a">首页</el-menu-item>
                 <el-menu-item index=""  class="a"><a href="https://daina11.github.io/gbook/" target="_blank">技术笔记</a></el-menu-item>
                 <el-menu-item index=""  class="a"><a  href="https://daina11.github.io/anires/index.html" target="_blank">动态简历</a></el-menu-item>
                 <el-menu-item index=""  class="a"><a href="https://daina11.github.io/dist/" target="_blank">关于我</a></el-menu-item>
                 <el-menu-item index="/aboutBlog"  class="a">关于博客</el-menu-item>
             </el-menu>
             <div class="footer-i" :span="24">
                 <i>这还有其他的哦~</i>
             </div>
             <div class="footer" :span="24">
                 <el-link class="el-icon-twoweixin" :underline="false" @click="drawer = true" ></el-link>
                 <el-link class="el-icon-twoQQ" :underline="false" @click="drawertwo = true"></el-link>
                 <el-link class="el-icon-twoweibo" :underline="false" href="https://weibo.com/u/2878382822/home" target="_blank"></el-link>
                 <el-link class="el-icon-twogithub" :underline="false" href="https://github.com/daina11" target="_blank"></el-link>
             </div>
        </el-aside>
<el-drawer
  title="这是我的微信"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <img src="../../../static/images/weixin.jpg" alt="" class="img">
</el-drawer>

<el-drawer
    title="这是我的QQ"
    :visible.sync="drawertwo"
    :direction="direction"
    :before-close="handleClose">
<img src="../../../static/images/QQ.jpg" alt="" class="img">
</el-drawer>
    </el-container>
    <el-container class="r-col">
        <router-view></router-view>
    </el-container>
<div class="phone-nav">
     <el-menu router="true" :span="24" mode="horizontal" class="nav" >
                 <el-menu-item index="/indexBlog"  class="">首页</el-menu-item>
                 <el-menu-item index=""  class=""><a href="https://daina11.github.io/gbook/" target="_blank">技术笔记</a></el-menu-item>
                 <el-menu-item index=""  class=""><a  href="https://daina11.github.io/anires/index.html" target="_blank">动态简历</a></el-menu-item>
                 <el-menu-item index=""  class=""><a href="https://daina11.github.io/dist/" target="_blank">关于我</a></el-menu-item>
                 <el-menu-item index="/aboutBlog"  class="">关于博客</el-menu-item>
             </el-menu>
</div>  
</el-container>

</template>
<script>

export default {
     data() {
      return {
        drawer: false,
        drawertwo:false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>
<style scoped lang="stylus">
.l-col
    position absolute
    background-color #fff
    position fixed
    opacity 1
    height 100%
    z-index 999
.blogName
    position relative
    top -25px
    color #585858
    font-size 2.5em
    margin-left 50px
    &:hover
        color #BDBDBD

.all-top
    background-color #fff
    
    height 300px
    z-index 1

.top
    
    height 150px
    z-index 2
    position relative
    margin 0 auto
    background-color #fff
    padding 0
    .mercury
        left 147.5px
        top 50px
        height 5px
        width 5px
        background-color rgb(166,138,56)
        border-radius 50%
        position absolute
        transform-origin 10px 10px
        animation rotate 1.5s infinite linear
    .venus
        top 55px
        left 125px
        height 8px
        width 8px
        background-color rgb(246,157,97)
        border-radius 50%;
        position absolute
        transform-origin 30px
        animation rotate 3.84s infinite linear
    .earth
        top 60px
        left 125px
        height 6px
        width 6px
        background-color rgb(115,114,174)
        border-radius 50%
        position absolute
        transform-origin 70px
        animation rotate 6.25s infinite linear
    .mars
        top 80px
        left 85px
        height 12px
        width 12px
        background-color rgb(255,0,255)
        border-radius 50%
        position absolute
        transform-origin 70px
        animation rotate 4.25s infinite linear
    .jupiter
        top 80px
        left 25px
        height 6px
        width 6px
        background-color rgb(238,174,238)
        border-radius 50%
        position absolute
        transform-origin 50px
        animation rotate 4.25s infinite linear

.a
    color #6E6E6E
    background-color #fff
    text-decoration none
    text-align center
    &:hover
        color #BDBDBD
    a
        color #6E6E6E
        &:hover
            color #BDBDBD
.el-menu
    border-right 0        
.avatar
    position relative
    z-index 999
    top -55px
    margin-left 90px
    background-image url(../../assets/avatar.png)
    width 125px
    height 125px
    border 5px solid #ffffff
    



.r-col
    position absolute
    right 0
    background #eaeaea
    height auto  
    left 310px
    width auto
.phone-nav
    display none 
    margin-bottom 20px
    position absolute
    width 100%
    border-bottom 0
    background-color #eaeaea
    .nav
        margin-bottom 30px
        border-bottom 0
        padding-left 10%
        padding-right 10%
        background-color #ffffff
@media screen and (max-width: 800px)
    .phone-nav
        display block
    .l-col 
        width 0px
        height 0
    .r-col
        margin-top 10%
        left 0px
    
.footer-i
    color #6E6E6E
    i 
        text-align center
        margin-left 105px
        font-size 0.8em
   
.footer
    padding 30px 0 0 15px
    .el-icon-twoweixin
        font-size 35px
        color #4caf00
        padding 0 0px 0 20px
        filter brightness(0.8)
        &:hover
            filter brightness(1)
    .el-icon-twoQQ        
        font-size 40px
        padding 0 10px 0 15px
        color #34baad
        filter brightness(0.8)
        &:hover
            filter brightness(1)
    .el-icon-twoweibo  
        font-size 35px
        padding 0 10px 0 10px
        color #ff5722
        filter brightness(0.8)
        &:hover
            filter brightness(1)
    .el-icon-twogithub
        font-size 35px
        padding 0 10px 0 10px
        color #afb6ca
        filter brightness(0.8)
        &:hover
            filter brightness(1)   
.img 
    margin-left 20%
    margin-top 40%

</style>
