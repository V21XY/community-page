<template>
  <div class="photo">
    <img
      src="https://img.zcool.cn/community/01eabb615091cb11013f22cfe7c68a.jpg@520w_390h_1c_1e_2o_100sh.jpg"
    /><a
      class="photo_link"
      href="https://500px.com.cn/community/photo-details/00d329b77c0c40d381d73d4adabef040"
      target="_blank"
    ></a>
    <div class="title">
      <p>月落乌啼霜满天</p>
    </div>
    <div class="bottom">
      <div class="footer">
        <div class="info">
          <img
            src="../assets/img/鱼.png"
            style="width:30px;height:30px"
            alt=""
          />
          <div class="name">TheV21</div>
          <a
            class="title_link"
            href="https://www.hao123.com/"
            target="_blank"
          ></a>
        </div>
        <div class="action">
           <i class="iconfont icon-guanyu1"></i>
          <i class="iconfont icon-faxian1"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoFrame",
  data: function() {
    return {};
  },
  mounted: function() {},
  methods: {},
};
</script>

<style scoped lang="scss">

.action .iconfont{
    margin-left: 15px;
    font-size: 20px;
    opacity: 0.8;
}

a {
  text-decoration: none;
  outline: 0;
   position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.photo {
  top: 0px;
  width: 500px;
  left: 0px;
  position: relative;
}

.photo img {
  position: relative;
  width: 100%;
}

.photo .photo_link {
  z-index: 1;
}

.title {
  position: absolute;
  top: 0;
  color: white;
  padding: 10px;
  width: 100%;
  left: 0;
  font-size: 13px;
  background: linear-gradient(0deg, transparent 0, rgba(0, 0, 0, 0.6));
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  height: 40px;
  opacity: 0;
}

.bottom {
  display: flex;
  position: absolute;
  bottom: 0px;
  color: white;
  width: 100%;
  left: 0;
opacity: 0;
  font-size: 14px;
  min-height: 50px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(rgba(0, 0, 0, 0.6))
  );
  background: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.6));
  background: -moz-linear-gradient(top, transparent 0, rgba(0, 0, 0, 0.6) 100%);
  background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.6));
  -webkit-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.bottom img {
  border-radius: 50%;
}

.footer {
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
}

.info {
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
   opacity: 0;
   bottom: 0;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}

.info .title_link {
   z-index: 2;
 
}

.name {
    margin-left: 3px;
  font-size: 10px;
  padding: 8px;
   border-radius: 20px;
}

.info:hover .name{
    background-color: rgba(216, 214, 214, 0.3);
}
.action {
    position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
   opacity: 0;
   bottom: 0;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}

.photo.active .bottom,
.photo:hover .bottom {
  opacity: 1;
}

.photo.active .info,
.photo:hover .info {
  opacity: 1;
  bottom: 10px;
  -webkit-transition: bottom 0.2s;
  -moz-transition: bottom 0.2s;
  transition: bottom 0.2s;
}

.photo.active .action,
.photo:hover .action {
  opacity: 1;
  bottom: 10px;
  -webkit-transition: bottom 0.2s;
  -moz-transition: bottom 0.2s;
  transition: bottom 0.2s;
}

.photo.active .title,
.photo:hover .title {
  opacity: 1;
 top: 0px;
  -webkit-transition: top 0.2s;
  -moz-transition: top 0.2s;
  transition: top 0.2s;
}
</style>
