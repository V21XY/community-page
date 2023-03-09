<template>
  <div class="search">
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
    <div class="searchbox">
      <el-input v-model="key" placeholder="请输入内容" class="head"></el-input>
      <el-button type="primary" @click="search()">搜索</el-button>
      <el-select v-model="value" placeholder="请选择" class="head">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="main">
      <div>
        <el-row :gutter="20">
          <el-col
            :span="6"
            v-for="(info, index) in userInfo"
            :key="index"
            style="margin-top: 20px"
          >
            <div class="grid-content">
              <div class="card">
                <div class="card-box">
                  <img class="card-img" :src="info.bgimg" alt="" />
                </div>
                <div class="flex-box">
                  <img :src="info.avatar" alt="" class="avatar" />

                  <el-badge
                    :value="info.role"
                    class="item"
                    :type="info.sex === 0 ? 'danger' : 'primary'"
                  >
                    <h2 style="font-size: 21px">{{ info.username }}</h2>
                  </el-badge>
                  <p class="username">
                    图片：{{ info.fans }} 粉丝：{{ info.fans }}
                  </p>
                  <el-button
                    class="fllow-btu"
                    size="small"
                    @click="clickApp(index)"
                    >关注</el-button
                  >
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row :gutter="20">
          <el-col
            :span="8"
            v-for="(info, index) in dynamicInfo"
            :key="index"
            style="margin-top: 20px"
          >
            <Photo :data="info"></Photo>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row :gutter="40">
          <el-col
            :span="6"
            v-for="(info, index) in actionInfo"
            :key="index"
            style="margin-top: 20px"
          >
            <ActionCrad :data="info"></ActionCrad>
          </el-col>
        </el-row>
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
import Photo from "../components/Photo.vue";
import ActionCrad from "../components/ActionCard.vue";
export default {
  name: "Search",
  data: function () {
    return {
      id: "",
      key: "",
      userInfo: [],
      dynamicInfo: [],
      actionInfo: [],
      shootingInfo: [],
      options: [
        {
          value: "all",
          label: "全部",
        },
        {
          value: "user",
          label: "用户",
        },
        {
          value: "action",
          label: "动态",
        },
        {
          value: "photo",
          label: "相册",
        },
        {
          value: "shooting",
          label: "约拍",
        },
      ],
      value: "all",
    };
  },
  components: {
    UnLoginHeader,
    LoginHeader,
    Footer,
    Photo,
    ActionCrad,
  },
  methods: {
    search() {
      axios
        .post("/api/search", {
          key: this.key,
          class: this.value,
        })
        .then((response) => {
          let res = response.data;
          console.log("查询", res);
          this.userInfo = res.user;
          this.dynamicInfo = res.dynamic;
          this.actionInfo = res.action;
          this.shootingInfo = res.shooting;
        });
    },
  },
  mounted() {
    this.key = this.$route.query.key;
    this.search();
    this.$nextTick(function () {
      axios.get("/api/userInfo").then((response) => {
        this.id = response.data[0].id;
      });
    });
  },
};
</script>

<style scoped lang="scss">
.searchbox {
  display: flex;
  // background-color: aqua;
  width: 100%;
  height: 60px;
}
.card {
  height: 280px;
  border-radius: 5px;
  background-color: #fdfdfd;
  border: #dbdcdc 1px solid;
}

.card-box {
  height: 50%;
  background: #ece4e4;
}
.card-img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 5px 15px -5px rgba(43, 42, 42, 0.5);
}
.avatar {
  height: 60px;
  width: 60px;
  margin-top: -30px;
  border: whitesmoke 2px solid;
  border-radius: 30px;
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fllow-btu {
  color: #0099e5;
  border-color: #0099e5;
  margin-top: 15px;
}
.username {
  font-size: 13px;
  color: #525558;
  margin-top: 5px;
}
.page {
  display: flex;
  justify-content: center;
}
.main > div {
  width: 80%;
}

.bg-purple {
  background: #d3dce6;
}

.grid-content {
  width: 100%;
  border-radius: 4px;
  min-height: 36px;
  height: 260px;
  margin-bottom: 20px;
  background-color: cadetblue;
}
::v-deep {
  .el-badge__content.is-fixed {
    right: 2px;
  }
  .head .el-input__inner {
    height: 60px;
  }
}
</style>