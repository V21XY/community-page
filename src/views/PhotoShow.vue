<template>
  <div id="photo">
    <div class="content-img">
      <el-carousel indicator-position="" height="450px">
        <el-carousel-item v-for="item in img_url" :key="item">
          <el-image
            fit="fill"
            :src="item"
            alt=""
            style="width: 100%"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <el-row gutter="30" style="margin-left: 285px">
        <el-col
          span="5"
          v-for="model in userInfo"
          :key="model"
          style="margin-top: 20px"
        >
          <div class="card">
            <div>
              <img :src="model.url" alt="" style="width: 100%" />
              <p
                style="
                  margin-top: 18px;
                  font-size: 12px;
                  text-align: left;
                  padding-left: 10px;
                  padding-right: 10px;
                "
              >
                {{ model.title }}
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="userInfo[0].count"
      :page-size="pageSize"
      @current-change="changePage"
      style="margin-top: 20px; margin-bottom: 30px"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PhotoShow",
  components: {},
  data() {
    return {
      userInfo: [],
      pageSize: 12,
      img_url: [
        "https://img.zcool.cn/community/01152d60dbcb4911013eaf704d28ce.jpg@1380w",
        "https://img.zcool.cn/community/01702e60da842311013f47208d8bd0.png@1380w",
        "https://img.zcool.cn/community/018b6e60dbcc7711013eaf70091157.jpg@1380w",
        "https://img.zcool.cn/community/01c55060dbcb5e11013f4720254e41.jpg@1380w",
      ],
    };
  },
  methods: {
    changePage(page) {
      axios
        .post("users/photoShow", {
          page: page,
        })
        .then((response) => {
          let res = response.data;
          console.log(res.result);
          this.userInfo = res;
        });
    },
  },
  mounted() {
    this.changePage();
  },
};
</script>

<style scoped>
.card {
  height: 300px;
  border-radius: 5px;
  border: #dbdcdc 1px solid;
}
</style>