<template>
  <div class="container">
    <img src="../assets/img/bg.png" alt="" class="wave">
    <div class="img">
      <img src="../assets/img/img-4.svg" alt="">
    </div>
    <div class="login-box">
      <form action="">
        <img src="../assets/img/avatar.svg" alt="" class="avatar">
        <h2 id="wel">Welcome</h2>
        <div class="input-group">
          <div class="icon">
            <i class="iconfont icon-fa-user"></i>
          </div>
          <div>
            <input type="text" class="input" id="username" placeholder="用户名">
          </div>
        </div>

        <div class="input-group">
          <div class="icon">
            <i class="iconfont icon-fasfa-lockCopy"></i>
          </div>
          <div>
            <input type="password" class="input" id="password" placeholder="密码">
          </div>
        </div>

        <div class="input-group">
          <div class="icon">
            <i class="iconfont icon-shenfen1"></i>
          </div>
          <div>
            <input type="text" class="input" id="role" placeholder="身份">
          </div>
        </div>

        <div class="input-group">
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <div>
            <input type="text" class="input" id="tel" placeholder="手机号码">
          </div>
        </div>

        <a href="login"><h3>Log in</h3></a><br>
        <input type="button" class="btn" @click="submit" value="注册" id="btn_reg">
      </form>
    </div>
  </div>
</template>

<script>
import '@/assets/css/iconfont.css'
import '@/assets/css/style.css'
import axios  from "axios";

export default {
name: "Signup",
  methods:{
    submit:function () {
      const username=document.getElementById('username').value
      const password=document.getElementById('password').value
      const role=document.getElementById('role').value
      const tel=document.getElementById('tel').value
      if(username===''||password===''||role===''||tel===''){
        alert('请把信息填写完整~')
      }else {
        axios.post('http://localhost:3000/signup',{
          username:username,
          password:password,
          role:role,
          tel:tel
        }).then(function (res) {
          if (res.data.flag){
            location.href='../login'
          }else {
            alert(res.data.msg)
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>