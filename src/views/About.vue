<template>
  <div class="about">
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
          class="iconfont icon-guanyu"
          style="font-weight: bold; font-size: 28px"
        ></i>
      </div>
    </el-backtop>
    <UnLoginHeader v-if="id == ''"></UnLoginHeader>
    <LoginHeader v-else></LoginHeader>
    <div class="header">
      <img src="../assets/img/导航.png" alt="" style="width: 100%" />
      <h1
        style="
          text-align: left;
          margin-left: 500px;
          color: whitesmoke;
          margin-top: -300px;
        "
      >
        关于500Px
      </h1>
      <p style="text-align: left; color: whitesmoke; margin-left: 500px">
        视觉中国500px与全球50万签约摄影师一起
      </p>
      <div class="content">
        <div class="left">
          <div class="left-item">
            <i
              class="iconfont icon-shangchuanzhaopian"
              style="font-size: 60px"
            ></i>
            <div class="left-item-font">
              <h2>注册、上传，轻松一步搞定</h2>
              <p>社区分享与投稿一步完成，轻松查询编审状态</p>
            </div>
          </div>

          <div class="left-item">
            <i class="iconfont icon-yuepai1" style="font-size: 60px"></i>
            <div class="left-item-font">
              <h2>约拍，你的热爱与工作共存</h2>
              <p>发布约拍，与品味相同的伙伴一起斟酌作品</p>
            </div>
          </div>

          <div class="left-item">
            <i class="iconfont icon-faxian2" style="font-size: 60px"></i>
            <div class="left-item-font">
              <h2>拍与被拍，皆因热爱</h2>
              <p>在这里的每一个人，都向往着摄影，美好的照片</p>
            </div>
          </div>
        </div>

        <div class="right">
          <div style="margin-left: 80px">
            <img
              src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
            />
          </div>
          <div
            style="
              margin-top: 210px;
              position: absolute;
              z-index: 100;
              margin-left: 400px;
            "
          >
            <img
              src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
            />
          </div>
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
export default {
  name: "About",
  components: {
    UnLoginHeader,
    LoginHeader,
    Footer,
  },
  data: function () {
    return {
      id: "",
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      axios.get("/api/userInfo").then((response) => {
        this.id = response.data[0].id;
      });
    });
  },
};
</script>

<style scoped>
.left-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.left-item-font {
  margin-left: 40px;
}

.left-item-font > h2 {
  margin-bottom: 10px;
  text-align: left;
}

.left-item-font > p {
  font-size: 14px;
  text-align: left;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
}
.left {
  width: 50%;
  height: 600px;
  padding-top: 120px;
}
.right {
  display: flex;
  width: 50%;
  padding-top: 60px;
  height: 600px;
}
.right > div > img {
  width: 500px;
  height: 320px;
}
</style>

