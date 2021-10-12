<template>
<div class="discover">
 <UnLoginHeader v-if="id == ''"></UnLoginHeader>
    <LoginHeader v-else></LoginHeader>
    <div class="navTab">
<el-button @click="back()">热门</el-button>
    <el-button @click="to()">最新</el-button>
    </div>
  <div class="section">
    <div v-for="img,index in photo" :key="index">
      <!-- <img :src="img" alt=""> -->
      <Photo :data="img" class="photo"></Photo>

    </div>
  </div>
  <Footer></Footer>
  </div>


</template>

<script>
import axios from "axios";
import Photo from "../components/Photo.vue";
import UnLoginHeader from "../components/UnLoginHeader.vue";
import LoginHeader from "../components/LoginHeader.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Discover",
  data: function() {
    return {
      photo: [],
      id:''
    };
  },
  components: {
    Photo, 
    UnLoginHeader,
    LoginHeader,
    Footer,
  },
  mounted: function() {
     this.$nextTick(function () {
     axios.get("/api/userInfo").then((response) => {
        this.id = response.data[0].id;
      });
    axios.get("/api/dynamic").then((response) => {
      this.photo = response.data;
    });
     })
  },
  methods: {
    to(){
    axios.get("/api/dynamicTime").then((response) => {
      this.photo = response.data;
    });
    },
    back(){
       axios.get("/api/dynamic").then((response) => {
      this.photo = response.data;
    });
    }
  },
};
</script>

<style scoped lang="scss">
.navTab{
  display: flex;
  // background-color: blue;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
}

.discover{
  position: relative;
}

.foo{
  position: absolute;
  bottom: 0px;
  right: 0px;
}

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
