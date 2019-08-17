<template>
    <div class="about">  
        <el-timeline >
    <el-timeline-item timestamp="2019/7/29" placement="top" type="success" >
      <el-card>
        <h4>慢慢完善</h4>
        <p>一点一点的完善吧</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/7/22" placement="top" type="success">
      <el-card>
        <h4>继续</h4>
        <p>还是各种坑</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/7/20" placement="top" type="success" >
      <el-card>
        <h4>开始有了初始模型</h4>
        <p>有点开心</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/7/15" placement="top" type="success" >
      <el-card>
        <h4>开发过程中的各种坑</h4>
        <p>思考，百度，问人</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/7/3" placement="top" type="success" >
      <el-card>
        <h4>规划需求</h4>
        <p>开始画饼，大概的模型</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/7/2" placement="top" type="success" >
      <el-card>
        <h4>尝试开发</h4>
        <p>刚开始用VUE试着开发一个属于自己的博客系统，希望能完成</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/6/20" placement="top" type="success" >
      <el-card>
        <h4>开始有一个做blog的想法</h4>
        <p>只是想法无从下手</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <Lfooter></Lfooter>
  <back></back>
  </div>
</template>
<script>
import footer from "../components/Lfooter"
import backTop from "../components/backTop"
export default {
    components:{
      "Lfooter":footer,
      "back":backTop
    }
}
</script>
<style scoped lang="stylus">
.el-timeline-item
    width auto
    height auto
.about
    width auto 
    height auto
    margin 0 30% 0 25%
.el-card
    h4
        font-size 18px
        font-weight 300px
    p
        color #6E6E6E
        margin-top 10px
</style>
