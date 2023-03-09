<template>
  <div>
    <div v-if="data.length === 0" class="empty">
      <el-empty description="暂时没有数据哦~"></el-empty>
    </div>
    <div class="section" v-else>
      <div v-for="(img, index) in data" :key="index">
        <ActionCard :data="img" class="photo" @reload="reload()"></ActionCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ActionCard from "./ActionCard.vue";
export default {
  name: "tuwen",
  components: {
    ActionCard,
  },
  props: {
    id: String,
  },
  data: function () {
    return {
      data: [],
    };
  },
  methods: {
    reload() {
      axios
        .get(`/api/userActionInfo`, {
          params: {
            id: this.id,
          },
        })
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
        });
    },
  },
  mounted() {
    this.reload();
  },
};
</script>

<style scoped  lang="scss" >
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