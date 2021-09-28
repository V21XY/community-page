<template>
  <div id="header">
    <div class="left">
      <ul class="nav">
        <a href="discover"><li>发现</li></a>
        <a href="photoer"> <li>摄影师</li></a>
        <a href="model"><li>模特</li></a>
        <a href="about"><li>关于500Px</li></a>
      </ul>
    </div>

    <div class="right">
      <el-form>
        <el-input
          style="width: 280px"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="search"
        >
        </el-input>
      </el-form>
      <a href="login"
        ><el-button plain round><h4>登录</h4></el-button></a
      >
      <a href="reg"
        ><el-button plain round><h4>注册</h4></el-button></a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UnLoginHeader",
  data: function () {
    return {
      userInfo: [],
      search: "",
      user: [],
      action: [],
    };
  },
  methods: {
   
  },
  mounted() {
   
  },
};
</script>

<style scoped >
/deep/.el-input__inner {
  border-radius: 30px;
}

/deep/.el-form {
  width: 280px;
}

.menu {
  height: 40px;
  width: 75px;
  text-align: center;
}
#header {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 15px;
  border-bottom: #d7d8d9 1.5px solid;
}

ul li {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.nav > a:active {
  color: #006aff;
}
.nav > a > li {
  float: left;
  margin-left: 30px;
  margin-top: 30px;
  font-size: 1rem;
  color: #9d9d9d;
}
.nav > a > li:hover {
  color: #006aff;
}

.left {
  width: 60%;
  margin-left: 5%;
}

a:hover {
  color: #006aff;
}
.right {
  width: 40%;
  margin-top: 23px;
  margin-left: 21px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.right > a {
  margin-left: 30px;
}
</style>