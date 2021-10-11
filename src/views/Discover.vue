<template>
  <div class="section">
    <div v-for="img,index in photo" :key="index">
      <!-- <img :src="img" alt=""> -->
      <Photo :data="img" class="photo"></Photo>

    </div>
  </div>


</template>

<script>
import axios from "axios";
import Photo from "../components/Photo.vue";
export default {
  name: "Discover",
  data: function() {
    return {
      photo: [],
    };
  },
  components: {
    Photo,
  },
  mounted: function() {
    axios.get("/api/dynamic").then((response) => {
      this.photo = response.data;
      console.log("图片列表", this.photo);
    });
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.section {
  display: flex;
  flex-wrap: wrap;
}
.section::after {
  content: "";
  flex-grow: 999999999;
}
.section > div {
  flex-grow: 1;
  margin: 2px;
}
.photo {
  max-width: 100%;
  min-width: 100%;
  vertical-align: bottom;
}
</style>
