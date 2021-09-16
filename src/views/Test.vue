<template>
  <div>
    <h1>TEST Welcome {{ username }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Test",
  data: function() {
    return {
      username: "",
    };
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
