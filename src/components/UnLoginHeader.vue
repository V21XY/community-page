<template>
  
    <div class="header">
      <el-row >
        <el-col :span="18">
          <div class="grid-content bg-purple" style="padding-top:12px;display:flex;padding-left:80px">
            <div>
         <img src="https://cdn.500px.me/images/logo-500px.png" height="24px">
         <div style="font-size:8px;margin-top:10px;letter-spacing: 0.5ch;">
          屬於我們的社區
         </div>
         </div>
  <div style="padding-top:18px">
         <ul>
           <li>發現</li>
           <li>攝影師</li>
           <li>約拍</li>
           <li>動態</li>
         </ul>
         </div>
          </div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple" style="padding-top:15px">
           <el-input
    placeholder="查找你想要的"
    prefix-icon="el-icon-search"
    width="80px"
    v-model="search">
  </el-input>
  
          </div></el-col>
                  <el-col :span="3"><div class="grid-content bg-purple" style="padding-top:15px;margin-left:50px">

   <el-button plain>登錄</el-button>
    <el-button type="info">註冊</el-button>
          </div></el-col>
      </el-row>
    </div>
 
</template>

<script>
export default {
  name: "UnLoginHeader",
  props: {
    msg: String,
  },
  data:function(){
    return{
      search:""
    }
  }
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
 ul li {
 display: inline;     
  margin: 40px;          
 } 
 ul li:hover{
   background:#4c4d4e;
   color: #e5e9f2;
 } 

.el-col {
  border-radius: 4px;
  position: relative;
  
}

.grid-content {
  border-radius: 4px;
   min-height: 70px;
  
   
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
