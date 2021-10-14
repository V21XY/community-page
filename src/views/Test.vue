<template>
  <div class="home">
    <div
      class="bgimg"
      id="pic1"
      v-bind:style="{
        'background-position-x': positionX,
        'background-position-y': positionY1 + 'px',
      }"
    ></div>
    <div class="content">
      <img
        :src="data.avatar"
        alt=""
      />
      <div class="name">{{data.username}}</div>
      <div class="introduce">{{data.introduce}}</div>
      <div class="action">
        <div class="address">
         {{data.address}}
        </div>
        <div class="fans">
          粉丝：{{data.fans}}
        </div>
        <div class="follows">
          关注：{{data.follows}}
        </div>
      </div>
    </div>

    <div class="content-item">内容2</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Test",

  data: function() {
    return {
      ratio: 0.05,
      positionX: "50%",
      positionY1: 0,
      id: "",
      data: {},
    };
  },
  components: {},
  created() {
    this.id = this.$route.query.id;
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
  methods: {},
};
</script>

<style scoped>
.bgimg {
  position: relative;
  width: 100%;
  height: 650px;
  background: #fff;
  background-attachment: fixed;
  background-position: center 0;
  background-repeat: no-repeat;
  background-image: url(https://pic1.zhimg.com/80/v2-2ed7ecf568362bf758dc4104978f452f_r.jpg);
  background-size: 100% 650px;
  background-color: #12b7f5;
}

.action {
  display: flex;
}

.content {
  background: orange;
  color: #fff;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: oldlace 2.5px solid;
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
