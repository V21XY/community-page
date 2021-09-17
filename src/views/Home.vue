<template>
  <div>
  
  <UnLoginHeader msg="我是周志贤"></UnLoginHeader>

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
