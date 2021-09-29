<template>
  <div class="main">
    <div class="left">
      <div class="full_screen">
        <i class="iconfont icon-faxian1"></i>
      </div>
      <div class="nav nav_left">
        <i class="iconfont icon-faxian1"></i>
      </div>
      <div class="nav nav_right">
        <i class="iconfont icon-faxian1"></i>
      </div>
      <div class="photo_frame">
        <img src="../assets/img/1.png" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="photographer_info">
        <div class="avatar">
          <img src="../assets/img/鱼.png" alt="" />
        </div>
        <div class="info">
          <p>TheV21</p>
          <el-button type="primary" size="mini" plain>关注</el-button>
        </div>
      </div>
      <div class="actions">
        <div class="item">
          <i class="iconfont icon-faxian1"></i>
          <p>210</p>
        </div>
        <div class="item">
          <i class="iconfont icon-faxian1"> </i>
          <p>210</p>
        </div>
        <div class="item">
          <i class="iconfont icon-faxian1"></i>
          <p>21</p>
        </div>
      </div>
      <div class="introduce">
        <p>Introduce</p>
        <div class="content">
          Our generation is different from those who raised us... Lack of
          comprehension as to what we prefer has been an issue between family...
          Thoughts is all we have...
        </div>
      </div>
      <div class="detail">
        详细
      </div>
<div class="comment">

</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data: function() {
    return {};
  },
  mounted: function() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.detail {
  font-size: 1.2rem;
  letter-spacing: 1px;
  height: 60px;
  // background-color: blue;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.full_screen {
  z-index: 15;
  position: absolute;
  top: 0;
  opacity: 0;
  right: 0;
  margin: 30px;
}

.photo_frame {
  position: absolute;
  top: 0;
  left: 15%;
  width: 70%;
  padding: 131px 340px;
  //  background-color: yellow;
}

.full_screen .iconfont {
  font-size: 2.1rem;
}

.nav .iconfont {
  color: rgb(214, 41, 41);
  font-size: 2.5rem;
  opacity: 0;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}

.avatar {
  width: auto;
  margin: 0 12px;
}

.info > p {
  font-size: 21px;
  color: rgb(73, 73, 73);
  margin-bottom: 6px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.introduce {
  // background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 20px;
}

.introduce > p {
  font-size: 1.1em;
  color: rgb(73, 73, 73);
  font-weight: bold;
  margin-bottom: 20px;
}

.introduce .content {
  font-size: 14px;
  line-height: 19px;
  color: rgb(73, 73, 73);
  letter-spacing: 0.5px;
}

.main {
  display: flex;
  height: 100vh;
}

.photographer_info {
  display: flex;
  align-items: center;
  // background-color: yellowgreen;
  width: 100%;
  height: 90px;
  padding: 0 20px;
}

.photographer_info .avatar > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.left {
  background-color: rgb(235, 235, 235);
  width: -webkit-calc(100% - 340px);
  position: relative;
}

.actions {
  display: flex;
  align-items: center;
  // background-color: yellowgreen;
  width: 100%;
  height: 80px;
  justify-content: space-around;
}

.actions .item {
  // background-color: royalblue;
  color: rgb(101, 173, 236);
  display: flex;
  align-items: center;
  font-size: 18px;
}

.item .iconfont {
  font-size: 26px;
  margin: 0 15px;
}

.nav {
  width: 15%;
  height: 100%;
  position: absolute;
  top: 0;
  // background-color: rgb(20, 103, 211);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav_left:hover .iconfont {
  opacity: 1;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4;
  transition: all 0.4s;
}

.nav_right:hover .iconfont {
  opacity: 1;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4;
  transition: all 0.4s;
}

.left:hover .full_screen {
  opacity: 1;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4;
  transition: all 0.4s;
}

.nav_left {
  left: 0;
}

.nav_right {
  right: 0;
  align-items: flex-end;
}

.right {
  width: 340px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
