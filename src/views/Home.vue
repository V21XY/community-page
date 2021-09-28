<template>
<div id="discover">
    <el-backtop :bottom="60">
      <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        Top<b>↑</b>
      </div>
    </el-backtop>
   
    <UnLoginHeader v-if="id == ''"></UnLoginHeader>
    <LoginHeader v-else></LoginHeader>

    <div class="content-img">
        
      <el-carousel indicator-position="" height="600px">
        <el-carousel-item v-for="item in img_url" :key="item">
         <transition name="el-zoom-in-center"> <el-image fit="fill" :src=item alt="" style="width: 100%" ></el-image> </transition>
        </el-carousel-item>
      </el-carousel>
       
    </div>
    <div class="icon-nav">
      <div class="discover-nav-item">
        <i class="iconfont icon-faxian1"></i>
        <p>发现</p>
        <p>他人镜头下的美丽</p>
        <a href="#"><el-button>发现美图</el-button></a>
      </div>

      <div class="discover-nav-item">
        <i class="iconfont icon-sheyingshi"></i>
        <p>摄影师</p>
        <p>用镜头去挖掘另一个世界</p>
        <a href="photoer"> <el-button>了解摄影</el-button></a>
      </div>

      <div class="discover-nav-item">
        <i class="iconfont icon-mote"></i>
        <p>模特</p>
        <p>展示自己最美的样子</p>
        <a href="model"><el-button>欣赏模特</el-button></a>
      </div>

      <div class="discover-nav-item">
        <i class="iconfont icon-guanyu1"></i>
        <p>我们</p>
        <p>关于这个网站的“我们”</p>
        <a href="about"><el-button>认真阅读</el-button></a>
      </div>
    </div>
    <div class="content">
      <div class="content-discover">
        <a href="photo" style="text-align: center"><h1 style="color: #525558;margin-bottom: 50px">发现精彩图像 尽在国际化摄影社区</h1></a>
        <el-row   style="margin-left: -65px">
          <el-col :span="5" v-for="(o) in photo" :key="o" offset="2">
            <div style="margin-bottom: 15px">
              <!-- <el-image  fit="cover" class="picture-img" :src="photo[index]"  :preview-src-list="photo" alt="" style="width: 535px;height: 300px;"></el-image> -->
              <PhotoFrame></PhotoFrame>
              <div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="content-photo">
        <h1 style="color: #525558;margin-bottom: 50px;padding-top: 60px">与优秀摄影师共驻，交流学习成长</h1>
        <div class="photo">
          <div class="photo-img-item">
            <el-avatar class="avatar"  src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3649178992,1821853682&fm=26&gp=0.jpg"></el-avatar>
            <p>TheV21</p>
            <p>粉丝 ：2541个</p>
          </div>
          <div class="photo-img-item">
            <el-avatar class="avatar" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1950846641,3729028697&fm=26&gp=0.jpg"></el-avatar>
            <p>将近的晚风快要吹干整条小巷</p>
            <p>粉丝 ：215个</p>
          </div>
          <div class="photo-img-item">
            <el-avatar class="avatar" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2456468987,3284231714&fm=26&gp=0.jpg"></el-avatar>
            <p>Donkey</p>
            <p>粉丝 ：2188个</p>
          </div>
          <div class="photo-img-item">
            <el-avatar class="avatar" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=708482407,3295795161&fm=26&gp=0.jpg"></el-avatar>
            <p>DonDeng21</p>
            <p>粉丝 ：2152个</p>
          </div>
        </div>
      </div>
      <div class="content-model">

        <h1 style="color: #525558;margin-bottom: 50px;padding-top: 60px">通过拍摄，展示你的独特魅力</h1>
        <div class="photo">
          <div class="photo-img-item">
            <el-avatar class="avatar"  src="https://img2.baidu.com/it/u=1441836571,2166773131&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
            <p>勇</p>
            <p>粉丝 ：25410个</p>
          </div>
          <div class="photo-img-item">
            <el-avatar class="avatar" src="https://wx1.sinaimg.cn/mw2000/7e7aafd6ly8ghuxzbifkzj20e80e8dgc.jpg"></el-avatar>
            <p>贤</p>
            <p>粉丝 ：215个</p>
          </div>
          <div class="photo-img-item">
            <el-avatar class="avatar" src="https://img2.baidu.com/it/u=1704219071,3761829583&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
            <p>熊</p>
            <p>粉丝 ：21458个</p>
          </div>
          <div class="photo-img-item">
            <el-avatar class="avatar" src="https://img1.baidu.com/it/u=3153764335,479392077&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
            <p>梨</p>
            <p>粉丝 ：521个</p>
          </div>
        </div>

      </div>
      <div class="content-about">
       <el-image src="https://cdn.500px.me/images/unloginIndex/iPhone8.png"></el-image>
        <div class="content-about introduce">
          <p>让精彩不止留在网页</p>
          <p>摄影社区21px现已着手开发移动端，让我们一起Coding，编写优美代码，与21px的Coder进行交流，创建自己的移动端社区。</p>
          <img src="../assets/img/TheV21-code.png">
          <a href="https://u.wechat.com/EGeLxT6XKPVgLHEbDvdpOpI" style="align-self: center">
            <div style="background-color: #000000;width: 180px;height: 40px;align-self: center;border-radius: 10px;margin-top: 20px">
            <span class="iconfont icon-weixin1" style="color: whitesmoke;font-size: 25px;float: left;padding-top:6px;padding-left:10px;padding-right: 10px" ></span>
            <div style="color: whitesmoke;font-size: 12px;padding-top: 15px;font-weight: bold">Add Me For WeChat</div>
          </div>
          </a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
import UnLoginHeader from "../components/UnLoginHeader.vue";
import LoginHeader from "../components/LoginHeader.vue";
import Footer from '../components/Footer.vue'
import PhotoFrame from '../components/PhotoFrame.vue'

export default {
  name: "Home",
  data: function () {
    return {
      id: '',
       img_url:[
        'https://img.zcool.cn/community/01cefd60cab82111013eaf70ae7581.png@1380w',
        'https://img.zcool.cn/community/01e1d760cbf80511013eaf70da4ddd.jpg@1380w',
        'https://img.zcool.cn/community/01910b60caa85911013f47206542cf.jpg@1380w',
        'https://img.zcool.cn/community/01309360caa84211013f47205c1c48.jpg@1380w'
      ],
      photo:[
          'https://img.zcool.cn/community/01153a60daab5e11013f4720b2f93b.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          'https://img.zcool.cn/community/011f3260da871f11013eaf70ffd63e.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          'https://img.zcool.cn/community/01c0d460d9b8cb11013f472080d6e8.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          'https://img.zcool.cn/community/013dae60d9470e11013eaf70ebda7c.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          'https://img.zcool.cn/community/01ac0c60d5a75111013eaf70f89936.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          'https://img.zcool.cn/community/01929b607e9a9a11013e87f4141fd0.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          'https://img.zcool.cn/community/01068460d42bb411013eaf70d6adb4.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          'https://img.zcool.cn/community/012e0f60d34fdb11013eaf70d17f12.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          'https://img.zcool.cn/community/013bf360d046ff11013f47209b4cf3.jpg@260w_195h_1c_1e_1o_100sh.jpg'
      ]
    };
  },
  components: {
    UnLoginHeader,
    LoginHeader,
    Footer,
    PhotoFrame
  },
  mounted: function () {
    this.$nextTick(function () {
      axios.get("/api/userInfo").then((response) => {
        this.id =response.data[0].id;
      });
    });
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.content-photo{
  background-color: #f5f5f5
}
.content-about .introduce>img{
  margin-top: 50px;
  width: 200px;
  height: 200px;
  align-self: center;
}
.content-about .introduce{
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 480px;
}
.content-about .introduce :nth-child(1){
 font-size: 36px;
  margin-bottom: 30px;
}

.content-about .introduce :nth-child(2){
  font-size: 18px;
  text-align:left;
}
.content-about{
  background-color: #f5f5f5;
  padding: 60px 0;
  display: flex;
  justify-content: center;
}
.content-model{
  background-color: #ffffff;
}
.content-discover{
  margin-top: 80px;
}
.photo-img-item :nth-child(2){
  font-size: 26px;
  color: #525558;
  font-weight: bold;
  margin-bottom: 20px
}
.photo-img-item :nth-child(3){
  font-size: 16px;
  color: #525558
}
.avatar{
  width: 180px;
  height: 180px;
  margin-top: 50px;
  margin-bottom: 30px
}
.photo{
  display: flex;
  justify-content: center;
  
}
.photo-img-item{
  width: 360px;
  height: 360px;
}

.icon-nav{
  margin:0 300px;
  display: flex;
  justify-content: center;
  height: 300px;
  align-items: center;
  padding-top: 80px;
}
.discover-nav-item{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  height: 100%
}

.discover-nav-item>i{
  font-size: 70px;
  color: #525558;
  margin-bottom: 20px;
}
.discover-nav-item :nth-child(2){
  font-size: 25px;
  color: #525558;
  margin-bottom: 20px;
}
.discover-nav-item :nth-child(3){
 font-size: 16px;
  color: #525558;
  margin-bottom: 20px
}
.discover-nav-item>a :nth-child(1){
  font-size: 16px;
  width: 120px;
  height: 50px;
  color: #7abaff;
  border-color: #7abaff;
}
</style>