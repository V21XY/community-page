<template>
  <div>
    <div v-if="data.length === 0" class="empty">
      <el-empty description="暂时没有数据哦~"></el-empty>
    </div>
    <div class="section" v-else>
      <div v-for="(img, index) in data" :key="index">
        <Photo :data="img" class="photo"></Photo>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Photo from "../components/Photo.vue";
export default {
  name: "zuopin",
  components: {
    Photo,
  },
  props: {
    id: String,
  },
  data: function () {
    return {
      data: [],
    };
  },
  mounted() {
    axios
      .get(`/api/userDynamicInfo`, {
        params: {
          id: this.id,
        },
      })
      .then((response) => {
        this.data = response.data;
        console.log(this.data);
      });
  },
};
</script>

<style scoped lang="scss"  >
.section {
  // background-color: antiquewhite;
  margin: 20px 50px;
  display: flex;
  flex-wrap: wrap;
}
.empty {
  display: flex;
  justify-content: center;
}
.section > div {
  /* flex-grow: 1; */
  margin-right: 10px;
}
</style>