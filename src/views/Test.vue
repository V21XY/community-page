<template>
  <div class="home">
    <LoginHeader></LoginHeader>
    <div
      class="bgimg"
      id="pic1"
      v-bind:style="{
        'background-position-x': positionX,
        'background-position-y': positionY1 + 'px',
        'background-image': `url(${data.bgimg})`,
      }"
    ></div>
    <div class="content">
      <img :src="data.avatar" alt="" />
      <div class="name">
        <h1>{{ data.username }}</h1>
      </div>

      <div class="introduce">{{ data.introduce }}</div>
      <div class="action">
        <div class="info">
          {{ data.address }}
        </div>
        <div class="info">粉丝：{{ data.fans }}</div>
        <div class="info" v-if="data.follows == null">关注：0</div>
        <div class="info" v-else>关注：{{ data.follows }}</div>
      </div>
    </div>

    <div class="tabNav">
      <el-menu
        :default-active="activeIndex"
        active-text-color="#0099E5"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">作品</el-menu-item>
        <el-menu-item index="2">图文</el-menu-item>
        <el-menu-item index="3">简介</el-menu-item>
      </el-menu>
    </div>
    <div v-if="key == 1">这是图文的时候才会显示</div>
  </div>
</template>

<script>
import axios from "axios";
import LoginHeader from "../components/LoginHeader.vue";
import jianjie from "../components/jianjie.vue";
import tuwen from "../components/tuwen.vue";
import zuopin from "../components/zuopin.vue";
export default {
  name: "Test",
  data: function () {
    return {
      ratio: 0.05,
      positionX: "100%",
      positionY1: 0,
      id: "",
      activeIndex: "1",
      data: {},
      set: "",
      key: 1,
    };
  },
  components: {
    LoginHeader,
    tuwen,
    zuopin,
    jianjie,
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
  },

  mounted() {
    axios
      .get(`/api/userDetail`, {
        params: {
          id: this.id,
        },
      })
      .then((response) => {
        this.data = response.data[0];
        console.log(this.data);
      });

    window.addEventListener("scroll", this.handleScroll);
    window.onload = () => {
      let pic1 = document.getElementById("pic1");
      this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio;
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.key = key;
      console.log("当前key的值", key);
    },
  },
};
</script>

<style scoped>
.tabNav {
  display: flex;
  justify-content: center;
  border-bottom: 1px #b9c1c7 1px;
  border-top: 1px #b9c1c7 1px;
}

.bgimg {
  position: relative;
  width: 100%;
  height: 750px;
  background-attachment: fixed;
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: 100% 850px;
}

.name h1 {
  font-size: 1.6rem;
  font-weight: 400;
  color: #525558;
  margin: 15px 0;
}

.introduce {
  font-size: 13px;
  line-height: 18px;
  color: #71767a;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.info {
  display: inline-block;
  vertical-align: middle;
  color: #b9c1c7;
  padding: 0 10px;
  line-height: 1.4em;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  margin: 15px 0;
}

.action {
  display: flex;
}

.content {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: oldlace 1.6px solid;
  margin-top: -50px;
  z-index: 100;
}

.content-item {
  background-color: #fff;
  width: 100%;
  line-height: 800px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
</style>
