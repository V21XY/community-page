<template>
  <div>
  
  <UnLoginHeader msg="这是网站未登录时的头部组件"></UnLoginHeader>

  </div>
</template>

<script>
import axios from "axios";
import UnLoginHeader from "../components/UnLoginHeader.vue"
export default {
  name: "Home",
  data: function() {
    return {
      username: "",
    };
  },
  components:{
    UnLoginHeader
  },
  mounted: function() {
    this.$nextTick(function() {
       axios.get('/api/userInfo').then((response) => {
       this.username=response.data.username
  console.log(response.data.username)
})
    });
  },
  methods: {

  },
};
</script>
