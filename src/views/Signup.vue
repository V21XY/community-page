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

          <div class="input-group">
            <div class="icon">
              <i class="iconfont icon-shenfen1"></i>
            </div>
            <div>
              <h5>角色</h5>
              <input type="text" class="input" v-model="role"/>
            </div>
          </div>

          <div class="input-group">
            <div class="icon">
              <i class="iconfont icon-dianhua"></i>
            </div>
            <div>
              <h5>手机号码</h5>
              <input type="text" class="input" v-model="tel" />
            </div>
          </div>

          <a href="login">Log in</a>
          <input
            type="button"
            class="btn"
            @click="submit"
            value="注册"
            id="btn_reg"
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
  name: "Signup",
  data: function() {
    return {
      username: "",
      password: "",
      role:"",
      tel:""
    };
  },
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
        axios.post("/api/signup", {
            username: this.username,
            password: this.password,
            role: this.role,
            tel:this.tel,
          })
          .then(function(res) {
            if (res.data.flag) {
              location.href = "../login";
            } else {
              alert(res.data.msg);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
};
</script>

<style scoped></style>
