<template>
  <div>
    <div style="margin:50px">
      {{ msg }}
    </div>
    <div class="header">
      <el-row :gutter="20">
        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="18"><div class="grid-content bg-purple">
         <img src="https://cdn.500px.me/images/logo-500px.png" height="24px">
          </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">21</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnLoginHeader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
  position: relative;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
   min-height: 50px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
