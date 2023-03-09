    <template>
  <div class="action">
    <div class="header">
      <el-avatar
        shape="square"
        :src="data.avatar"
        class="avatar"
        @click="toUser(data.id)"
      ></el-avatar>
      <div class="name">
        <span class="username">{{ data.username }}</span>
        <span class="time">{{ data.time }}</span>
      </div>
      <el-button
        v-if="data.id === id"
        @click="delectAction(data.aid)"
        class="fllows"
        size="mini"
        type="danger"
        >删除</el-button
      >
    </div>
    <div class="content">
      {{ data.content }}
    </div>
    <div class="photo">
      <el-image
        alt=""
        class="image"
        :src="data.photoList[0]"
        :preview-src-list="data.photoList"
      >
      </el-image>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ActionCrad",
  props: {
    data: Object,
  },
  data: function () {
    return {
      id: 0,
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      axios.get("/api/userInfo").then((response) => {
        this.id = response.data[0].id;
      });
    });
  },
  methods: {
    toUser(id) {
      this.$router.push({
        path: `/test/${id}`,
      });
    },
    delectAction(did) {
      axios
        .post("/api/delectAction", {
          did: did,
        })
        .then((res) => {
          if (res.data.data) {
            this.$emit("reload");
            this.$message({
              message: "删除成功！",
              type: "success",
            });
          }
        });
    },
  },
};
</script>
    <style scoped  lang="scss" >
.main {
  height: 100%;
  background: antiquewhite;
  .fllowbox {
    .fllowImg {
      padding: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      height: 70px;
      margin-top: 10px;
      display: flex;
      img {
        margin-right: 10px;
        width: 60px;
        height: 60px;
        border-radius: 10px;
      }
      .content {
        height: 100%;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgb(88, 88, 88);
      }
    }
  }
}

.action {
  height: auto;
  width: 320px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .header {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    background-color: rgb(255, 255, 255);
    .name {
      display: flex;
      flex-direction: column;
      .username {
        font-size: 16px;
        font-weight: 500;
        color: rgb(77, 77, 77);
      }
      .time {
        font-size: 6px;
        color: rgb(173, 173, 173);
      }
    }
    .fllows {
      position: absolute;
      right: 20px;
    }
  }
  .content {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    color: rgb(88, 88, 88);
    letter-spacing: 0.5px;
    color: rgb(66, 66, 66);
    margin: 0px 8px;
    font-size: 15px;
  }
  .photo {
    display: flex;
    flex-wrap: wrap;
    margin: 8px;
    .image {
      margin: 5px 10px;
      width: 300px;
      height: 180px;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
}

.avatar {
  margin: 8px;
  width: auto;
}
::v-deep {
  .el-button {
    border: none !important;
  }
  .el-button--default {
    color: rgb(66, 66, 66);
  }
  .el-dialog__title {
    font-size: 1.1rem;
  }
  .el-dialog__body {
    padding: 10px 20px;
  }
  .el-divider--horizontal {
    margin: 0px;
  }
}
</style>