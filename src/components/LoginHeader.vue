<template>
  <div id="header">
    <div class="left">
      <ul class="nav">
        <a href="http://localhost:8080"><li>首页</li></a>
        <a href="http://localhost:8080/discover"><li>发现</li></a>
        <a href="http://localhost:8080/action"><li>动态</li></a>
        <a href="http://localhost:8080/shooting"><li>约拍</li></a>
        <a href="http://localhost:8080/photoer"> <li>摄影师</li></a>
        <a href="http://localhost:8080/model"><li>模特</li></a>
        <a href="http://localhost:8080/about"><li>关于500Px</li></a>
      </ul>
    </div>

    <div class="right">
      <el-input
        style="width: 280px"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="search"
      >
      </el-input>
      <el-button plain round @click="searchKey(search)"
        ><h4>搜索</h4></el-button
      >
      <div class="user">
        <el-badge :value="userInfo.role" class="item" type="primary">
          <el-avatar :src="userInfo.avatar"></el-avatar>
        </el-badge>
        <el-dropdown>
          <h5 class="el-dropdown-link" style="margin-left: 5px">
            {{ userInfo.username }}
          </h5>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="menu">
              <p @click="ToUserDetail(userInfo.id)">个人信息</p>
            </el-dropdown-item>
            <el-dropdown-item class="menu">
              <p @click="upload">上传</p>
            </el-dropdown-item>
            <el-dropdown-item class="menu">
              <p @click="logout">注销</p>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <a href="http://localhost:8080/login"
        ><el-button plain round><h4>登录</h4></el-button></a
      >
      <a href="http://localhost:8080/signup"
        ><el-button plain round><h4>注册</h4></el-button></a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
  name: "LoginHeader",
  data: function () {
    return {
      userInfo: {},
      search: "",
    };
  },
  methods: {
    getUserInfo: function () {
      axios.get("/api/userInfo").then((response) => {
        let res = response.data;
        this.userInfo = res[0];
        console.log(this.userInfo);
      });
    },
    upload() {
      location.href = "../UploadPhoto";
    },
    searchKey(key) {
      console.log(key);
      this.$router.push({
        path: `/search`,
        query: {
          key: key,
        },
      });
    },
    ToUserDetail(id) {
      this.$router.push({
        path: `/test/${id}`,
      });
    },
    logout: function () {
      axios
        .post("/api/changeshooting", {
          type: 0,
        })
        .then((res) => {
          Cookies.remove("id");
          location.reload();
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
}
.nav > a > li:hover {
  color: #006aff;
}

.left {
  width: 60%;
  margin-left: 5%;
}

.user {
  margin-left: 30px;
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