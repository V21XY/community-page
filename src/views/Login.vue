<template>
  <div>
    <img src="../assets/img/bg.png" alt="" class="wave" />
    <div class="container">
      <div class="img">
        <img src="../assets/img/img-4.svg" alt="" />
      </div>
      <div class="login-box">
        <form action="">
          <img src="../assets/img/avatar.svg" alt="" class="avatar" />
          <h2>Welcome</h2>
          <div class="input-group">
            <div class="icon">
              <i class="iconfont icon-fa-user"></i>
            </div>
            <div>
              <h5>用户名</h5>
              <input type="text" class="input" v-model="username" />
            </div>
          </div>
          <div class="input-group">
            <div class="icon">
              <i class="iconfont icon-fasfa-lockCopy"></i>
            </div>
            <div>
              <h5>密码</h5>
              <input type="password" class="input" v-model="password" />
            </div>
          </div>
          <a href="signup">Sign UP</a>
          <input
            type="submit"
            @click="submit"
            class="btn"
            value="登录"
            id="btn_log"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/iconfont.css";
import "@/assets/css/style.css";

import axios from "axios";

export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  //在挂载完成时调用js文件控制样式
  mounted: function() {
    this.$nextTick(function() {
      const inputs = document.querySelectorAll(".input");

      function focusFunction() {
        let parentNode = this.parentNode.parentNode;
        parentNode.classList.add("focus");
      }
      function blurFunction() {
        let parentNode = this.parentNode.parentNode;
        if (this.value == "") {
          parentNode.classList.remove("focus");
        }
      }

      inputs.forEach((input) => {
        input.addEventListener("focus", focusFunction);
        input.addEventListener("blur", blurFunction);
      });
    });
  },

  methods: {
    //获取前端数据通过axios发送给服务器
    submit: function() {
      axios.post('/api/login', {
          username: this.username,
          password: this.password,
        })
        .then(function(res) {
          if (res.data.flag) {
            location.href = "/";
            console.log(res.data)
          } else {
            alert(res.data.msg);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
