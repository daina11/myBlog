<template>
    <el-backtop :bottom="50" :visibility-height="100"  transition-name="fade">
				<div class="bt">
				 TOP
				</div>
			  </el-backtop>
</template>
<script>
export default {
}
</script>
<style scoped lang="stylus">
.bt
    height auto
    width auto
    font-size:1em
    padding-left 10%
    padding-right 20%
    background-color #f2f5f6
    box-shadow 0 0 6px rgba(0,0,0, .12)
    text-align center
    line-height 60px
    color #1989fa
</style>

