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
              <input type="text" class="input" id="username" />
            </div>
          </div>
          <div class="input-group">
            <div class="icon">
              <i class="iconfont icon-fasfa-lockCopy"></i>
            </div>
            <div>
              <h5>密码</h5>
              <input type="password" class="input" id="password" />
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
    submit: function() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (username === "" || password === "") {
        alert("用户名和密码不能为空");
      } else {
        axios
          .post("http://localhost:3000/login", {
            username: username,
            password: password,
          })
          .then(function(res) {
            if (res.data.flag) {
              location.href = "../";
            } else {
              alert(res.data.msg);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
