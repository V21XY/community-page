<template>
<div id="footer">
<div class="left">
 <h1>视觉中国500px摄影社区</h1>
  <p>视觉中国500px摄影社区是专业的创意摄影师社区，在这里我们一起来分享照片、发现好作品、交流拍摄技巧、创建属于自己的摄影个人主页。来自世界各地的摄影师是我们忠实的用户。让你与他人因图片相识，世界很大，我想看一看。</p>
<div class="left-icon">
  <a href="https://gitee.com/thev21/projects"><span class="iconfont icon-huaban88"></span></a>
  <a href="https://weibo.com/u/2966274747/home?wvr=5#1623118866579"><span class="iconfont icon-weibo-01"></span></a>
  <a href="https://www.bilibili.com/"><span class="iconfont icon-Bzhan"></span></a>
</div>
</div>
  <div class="right">
    <div>
      <img src="../assets/img/TheV21-code.png" alt="">
      <p>个人微信</p>
    </div>

    <div>
      <img src="../assets/img/TheV21-all.jpg" alt="">
      <p>微信公众号</p>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.iconfont{
  font-size: 36px;
  color: #525558;
}
#footer{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #525558;
}
.left-icon{
  display: flex;
  float: left;
  margin-top: 20px;
}
.left-icon>a{
  margin-right: 50px;
}
.left{
  width: 55%;
  text-align: left;
  line-height: 2.2rem;
  padding-left: 500px;
  padding-top: 80px;
  margin-bottom: 20px;
}
.left>h1{
  margin-bottom: 30px;
}
.left>p{
  font-size: 18px;
}
.right{
  width: 45%;
  padding-top: 80px;
  display: flex;
  margin-left: 200px;
  align-items: center;
}
.right>div{
  margin-right: 20px;
}
.right>div>img{
  width: 200px;
  height: 200px;
}
</style>