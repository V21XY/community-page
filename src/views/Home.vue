<template>
  <div id="discover">
    <el-backtop :bottom="60">
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        <i
          class="iconfont icon-guanyu1"
          style="font-weight: bold; font-size: 28px"
        ></i>
      </div>
    </el-backtop>

    <UnLoginHeader v-if="id == ''" ></UnLoginHeader>
    <LoginHeader v-else ></LoginHeader>

    <div class="content-img">
      <el-carousel arrow="never" indicator-position="none" height="560px">
        <el-carousel-item v-for="item in img_url" :key="item">
          <transition name="el-zoom-in-center">
            <el-image
              fit="fill"
              :src="item"
              alt=""
              style="width: 100%"
            ></el-image>
          </transition>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="icon-nav">
      <div class="discover-nav-item">
        <i class="iconfont icon-faxian1"></i>
        <p>发现</p>
        <p>他人镜头下的美丽</p>
        <a href="/discover"><el-button>发现美图</el-button></a>
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
      <div class="content-discover" style="padding:0 183px">
        <h1>发现精彩图像 尽在国际化摄影社区</h1>
        <el-row>
          <el-col :span="8" v-for="o in photo" :key="o">
            <div
              style="
                margin-bottom: 30px;
                display: flex;
                justify-content: center;
              "
            >
              <PhotoFrame :data="o"></PhotoFrame>
             
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="content-photo">
        <h1>与优秀摄影师共驻，交流学习成长</h1>
        <div class="photo" >
          <div class="photo-img-item"  v-for="(item) in hotList" :key="item.id"  @click="ToUserDetail(item.id)">
            <el-avatar
              class="avatar"
              :src="item.avatar"
            ></el-avatar>
            <p>{{item.username}}</p>
            <p>粉丝 ：{{item.fans}}个</p>
          </div>
        </div>
      </div>
      <div class="content-model">
        <h1>通过拍摄，展示你的独特魅力</h1>
        <div class="photo">
          <div class="photo-img-item"  v-for="(item) in hotList" :key="item.id">
            <el-avatar
              class="avatar"
              :src="item.avatar"
            ></el-avatar>
            <p>{{item.username}}</p>
            <p>粉丝 ：{{item.fans}}个</p>
          </div>
        </div>
      </div>
      <div class="content-about">
        <el-image
          src="https://cdn.500px.me/images/unloginIndex/iPhone8.png"
        ></el-image>
        <div class="content-about introduce">
          <p>让精彩不止留在网页</p>
          <p>
            摄影社区21px现已着手开发移动端，让我们一起Coding，编写优美代码，与21px的Coder进行交流，创建自己的移动端社区。
          </p>
          <img src="../assets/img/TheV21-code.png" />
          <a
            href="https://u.wechat.com/EGeLxT6XKPVgLHEbDvdpOpI"
            style="align-self: center"
          >

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
import Footer from "../components/Footer.vue";
import PhotoFrame from "../components/PhotoFrame.vue";

export default {
  name: "Home",
  data: function () {
    return {
      id: "",
      username: "周志贤",
      img_url: [
        "https://img.zcool.cn/community/01cefd60cab82111013eaf70ae7581.png@1380w",
        "https://img.zcool.cn/community/01e1d760cbf80511013eaf70da4ddd.jpg@1380w",
        "https://img.zcool.cn/community/01910b60caa85911013f47206542cf.jpg@1380w",
        "https://img.zcool.cn/community/01309360caa84211013f47205c1c48.jpg@1380w",
      ],
      photo: [],
      hotList:[]
    };
  },
  components: {
    UnLoginHeader,
    LoginHeader,
    Footer,
    PhotoFrame,
  },
  mounted: function () {
    this.$nextTick(function () {
      axios.get("/api/userInfo").then((response) => {
        this.id = response.data[0].id;
      });
      axios.get("/api/dynamic").then((response) => {
        this.photo = response.data;
        console.log("图片列表", this.photo);
      });
       axios.get("/api/hotList").then((response) => {
         this.hotList=response.data
        console.log("热门列表", response.data);
      });
    });
  },
  methods: {
    ToUserDetail(id){
       this.$router.push({
        path:'/test',
        query:{
          id:id
        }
      })
    }
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: #525558;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 50px;
  padding-top: 50px;
  text-align: center;
}


.content-photo {
  background-color: #f5f5f5;
}
.content-about .introduce > img {
  width: 200px;
  height: 200px;
  align-self: center;
}
.content-about .introduce {
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 480px;
}
.content-about .introduce :nth-child(1) {
  font-size: 36px;
  margin-bottom: 30px;
}

.content-about .introduce :nth-child(2) {
  font-size: 18px;
  text-align: left;line-height: 30px;
}
.content-about {
  background-color: #f5f5f5;
  padding: 60px 0;
  display: flex;
  justify-content: center;
}
.content-model {
  background-color: #ffffff;
}

.photo-img-item :nth-child(2) {
  font-size: 26px;
  color: #525558;
  font-weight: bold;
  margin-bottom: 20px;
}
.photo-img-item :nth-child(3) {
  font-size: 16px;
  color: #525558;
}
.avatar {
  width: 180px;
  height: 180px;
  margin-top: 50px;
  margin-bottom: 30px;
}
.photo {
  display: flex;
  justify-content: center;
}
.photo-img-item {
  width: 360px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon-nav {
  margin: 0 100px;
  display: flex;
  justify-content: center;
  height: 300px;
  align-items: center;
}
.discover-nav-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  height: 100%;
}

.discover-nav-item > i {
  font-size: 70px;
  color: #525558;
  margin-bottom: 20px;
}
.discover-nav-item :nth-child(2) {
  font-size: 25px;
  color: #525558;
  margin-bottom: 20px;
}
.discover-nav-item :nth-child(3) {
  font-size: 16px;
  color: #525558;
  margin-bottom: 20px;
}
.discover-nav-item > a :nth-child(1) {
  font-size: 16px;
  width: 120px;
  height: 50px;
  color: #7abaff;
  border-color: #7abaff;
}
</style>