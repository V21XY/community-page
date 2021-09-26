<template>
  <div>
    <UnLoginHeader v-if="username == ''"></UnLoginHeader>
    <LoginHeader v-else></LoginHeader>
  </div>
</template>

<script>
import axios from "axios";
import UnLoginHeader from "../components/UnLoginHeader.vue";
import LoginHeader from "../components/LoginHeader.vue";
export default {
  name: "Home",
  data: function () {
    return {
      username: "",
    };
  },
  components: {
    UnLoginHeader,
    LoginHeader,
  },
  mounted: function () {
    this.$nextTick(function () {
      axios.get("/api/userInfo").then((response) => {
        this.username = response.data.username;
      });
    });
  },
  methods: {},
};
</script>
