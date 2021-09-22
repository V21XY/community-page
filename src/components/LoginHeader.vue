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
      <div class="user">
        <el-badge value="角色" class="item" type="primary">
          <el-avatar
            src="https://iconfont.alicdn.com/t/a0aaa8b0-8be5-410b-814f-a3117569c415.png"
          ></el-avatar>
        </el-badge>
        <el-dropdown>
          <h5 class="el-dropdown-link" style="margin-left: 5px">
            {{ username }}
          </h5>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled="true" class="menu"
              >个人信息</el-dropdown-item
            >
            <el-dropdown-item disabled="true" class="menu"
              >注销</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
  name: "LoginHeader",
  data: function () {
    return {
      userInfo: [],
      search: "",
      user: [],
      action: [],
    };
  },
  methods: {
    getUserInfo: function () {
      axios.get("users/index").then((response) => {
        let res = response.data;
        this.userInfo = res;
        console.log(this.userInfo);
      });
    },
    onSubmit: function () {
      axios
        .post("users/search", {
          search: this.search,
        })
        .then((response) => {
          let res = response.data;
          this.user = res.user;
          this.action = res.action;
          location.href = "../search";
        });
    },
  },
  mounted() {
    this.getUserInfo();
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
  font-family: KaiTi_GB2312;
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