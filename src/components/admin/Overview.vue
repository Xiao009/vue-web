<template>
  <div class="overview">
      <div class="container h-100">
          <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                 <h3>Overview Page</h3>
                 <p>
                  <el-card shadow="hover" style="height:252px;">
                    <div slot="header" class="clearfix">
                        <span>学习进度/课程进度</span>
                    </div>Vue
                    <el-progress :percentage="71.3" color="#42b983"></el-progress>JavaScript
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
                    <el-progress :percentage="13.7"></el-progress>HTML
                    <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
                   </el-card>
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="/img/svg/overview.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
     
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
