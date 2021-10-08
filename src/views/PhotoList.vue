<template>
  <div class="section">
      <div v-for="img in imgList" :key="img">
          <img :src="img" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: "PhotoList",
  data: function() {
    return {
        imgList:[ 
            "https://xieranmaya.github.io/images/cats/stock-photo-31201539.jpg",
            "https://xieranmaya.github.io/images/cats/photo-115203323.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-143181649.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-81390687.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-147877407.jpg",
            "https://xieranmaya.github.io/images/cats/photo-23583825.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-7980252.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-144530143.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-47252094.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-51980510.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-72223295.jpg",
            "https://xieranmaya.github.io/images/cats/stock-photo-74402039.jpg",
            
            ]
       
    };
  },
  mounted: function() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.section{
  display: flex;
  flex-wrap: wrap;
}
.section::after{
  content: '';
  flex-grow: 999999999;
}
.section>div{
  flex-grow: 1;
  margin: 2px;
  background-color: violet;
  height: 200px;
}
img{
  height: 200px;
  object-fit: cover;
  max-width: 100%;
  min-width: 100%;
  vertical-align: bottom;
}
</style>
