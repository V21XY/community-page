<template>
  <div class="main">
    <UnLoginHeader v-if="id == ''"></UnLoginHeader>
    <LoginHeader v-else></LoginHeader>
    <div class="center">
      <div class="action" v-for="(info, index) in data" :key="index">
        <!-- <div class="header" v-if="info.type === 'share'">
          <el-badge
            :type="info.sex === '男' ? 'primary' : 'danger'"
            :value="info.role"
            class="item"
          >
            <el-avatar
              shape="square"
              class="avatar"
              fit
              :src="info.avatar"
            ></el-avatar>
          </el-badge>
          <div class="name">
            <div class="username" style="font-size: 17px">
              {{ info.username }}
              <span style="font-size: 16px; color: rgb(167, 165, 165)"
                >快转了</span
              >
            </div>
            <span class="time" style="font-size: 14px; margin-top: 5px">{{
              info.new_public_date
            }}</span>
          </div>
          <el-button
            v-if="id != info.id"
            :status="info.status"
            class="fllows"
            size="mini"
            @click="switchStatus(info.id, info.status)"
            :type="info.status === true ? 'danger' : 'primary'"
            >{{ info.status === true ? "取消关注" : "关注" }}</el-button
          >
          <el-button
            v-else
            class="fllows"
            size="mini"
            @click="delectAction(info.aid)"
            type="danger"
            >删除</el-button
          >
        </div> -->

        <div class="header">
          <el-badge
            :type="info.sex === '男' ? 'primary' : 'danger'"
            :value="info.role"
            class="item"
          >
            <el-avatar
              shape="square"
              class="avatar"
              fit
              :src="info.avatar"
            ></el-avatar>
          </el-badge>
          <div class="name">
            <div class="username" style="font-size: 17px">
              {{ info.username }}
            </div>
            <div class="time" style="font-size: 14px; margin-top: 5px">
              {{ info.public_date }}
            </div>
          </div>
          <el-button
            type="success"
            round
            size="mini"
            style="margin-left: 20px"
            @click="PostShooting(info.s_id, info.user_id)"
            v-if="info.user_id !== id"
            >发起约拍</el-button
          >
          <el-button
            v-if="id != info.id"
            :status="info.status"
            class="fllows"
            size="mini"
            @click="switchStatus(info.id, info.status)"
            :type="info.status === true ? 'danger' : 'primary'"
            >{{ info.status === true ? "取消关注" : "关注" }}</el-button
          >
          <el-button
            v-else
            class="fllows"
            size="mini"
            @click="delectAction(info.aid)"
            type="danger"
            >删除</el-button
          >
        </div>
        <div class="content">
          <span style="margin-right: 8px">{{ info.local }}</span>
          <span v-if="info.free === 1" style="margin-right: 8px">希望互免</span>
          <span v-else style="margin-right: 8px">收费</span>
          <span
            v-if="info.free === 0"
            style="margin-right: 8px; font-weight: 600; color: #409eff"
            >{{ info.money }}元</span
          >
        </div>
        <div class="content">
          <span style="color: #888">约拍：</span>
          {{ info.content }}
        </div>
        <div class="photo">
          <el-image
            v-for="(item, index) in info.photo_list"
            :key="index"
            alt=""
            class="image"
            :src="item"
            :preview-src-list="info.photo_list"
          >
          </el-image>
        </div>
        <div class="footer" v-if="info.likeNum">
          <div class="req">收到了{{ info.likeNum }}条约拍邀请</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UnLoginHeader from "../components/UnLoginHeader.vue";
import LoginHeader from "../components/LoginHeader.vue";
export default {
  components: {
    UnLoginHeader,
    LoginHeader,
  },
  inject: ["reload"],
  data() {
    return {
      commentId: 0,
      status: false,
      dialogVisible: false,
      isshare: false,
      count: 10,
      input2: "",
      input: "",
      iscomment: false,
      islike: false,
      likes: 52,
      photo: [],
      data: [],
      id: "",
      commentList: [],
      comment_content: "",
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      axios.get("/api/userInfo").then((response) => {
        this.id = response.data[0].id;
      });
      this.getActions();
    });
  },
  methods: {
    share(id, did) {
      // this.dialogVisible = true;
      axios
        .post("/api/share", {
          did: did,
        })
        .then((res) => {
          if (res.data.data) {
            this.$message({
              message: "转发成功！",
              type: "success",
            });
          }
        });
    },
    getActions() {
      axios.get("/api/shooting").then((response) => {
        this.data = response.data;
      });
    },
    comment(id, did) {
      this.commentList = [];
      axios
        .post("/api/getComment", {
          did: did,
        })
        .then((response) => {
          this.commentList = response.data;
          console.log(response.data);
        });
      if (this.commentId == did) {
        this.commentId = 0;
      } else {
        this.commentId = did;
      }
    },
    postComment(aid, commentNum) {
      if (this.comment_content == "") {
        this.$message({
          message: "你的评论不能为空",
          type: "warning",
        });
      } else {
        axios
          .post("/api/postComment", {
            did: aid,
            pid: this.id,
            content: this.comment_content,
          })
          .then((res) => {
            axios
              .post("/api/getComment", {
                did: aid,
              })
              .then((response) => {
                this.commentList = response.data;
                console.log(response.data);
              });
            this.comment_content = "";
          });
      }
    },

    PostShooting(did, user_id) {
      axios
        .post("/api/postshooting", {
          id: did,
          user_id: user_id,
        })
        .then((res) => {
          this.getActions();
          this.$message({
            message: "约拍成功！",
            type: "success",
          });
        });
    },
    checkStatus(id, status) {
      return new Promise((resolve) => {
        if (status == true) {
          this.$confirm("确定要取消关注吗？").then((res) => {
            resolve();
          });
        } else {
          resolve();
        }
      });
    },
    delectAction(did) {
      axios
        .post("/api/delectAction", {
          did: did,
        })
        .then((res) => {
          if (res.data.data) {
            this.getActions();
            this.$message({
              message: "删除成功！",
              type: "success",
            });
          }
        });
    },
    switchStatus(id, status) {
      this.checkStatus(id, status)
        .then((res) => {
          console.log("这是一个id", id);
          axios
            .post("/api/userFollow", {
              id: id,
            })
            .then((res) => {
              this.getActions();
            });
        })
        .then((res) => {
          if (status !== true) {
            this.$message({
              message: "关注成功！",
              type: "success",
            });
          } else {
            this.$message({
              message: "取消关注成功！",
              type: "warning",
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  //   height: 100%;
  //   background: antiquewhite;
  //   display: flex;
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
        // color: rgb(167, 165, 165);
      }
      .content {
        height: 100%;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgb(88, 88, 88);
      }
    }
  }
}
.comment-box {
  height: 360px;
  overflow-y: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  .header {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    .name {
      display: flex;
      flex-direction: column;
      .username {
        font-size: 20px;
        font-weight: 500;
        color: rgb(77, 77, 77);
      }
      .time {
        font-size: 8px;
        margin-top: 5px;
        color: rgb(173, 173, 173);
      }
    }
  }
  .content {
    margin: 0px 50px 10px;
    //  width: 100%;
  }
}

.action {
  height: auto;
  width: 777px;
  padding-top: 12px;
  margin-bottom: 20px;
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
    // background-color: blue;
    letter-spacing: 0.5px;
    text-indent: 10px;
    color: rgb(66, 66, 66);
    margin: 5px 8px;
    font-size: 15px;
  }
  .photo {
    display: flex;
    // background-color: blueviolet;
    flex-wrap: wrap;
    margin: 8px;
    .image {
      margin: 5px;
      width: 180px;
      height: 180px;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .footer {
    // background-color: blueviolet;
    margin: 0 8px;
    display: flex;
    justify-content: space-between;
    .req {
      background-color: #409eff;
      margin-bottom: 8px;
      color: azure;
      padding: 4px;
      border-radius: 3px;
      height: 25px;
    }
  }
}

.avatar {
  margin: 5px 8px 8px;
}
.postConment {
  position: relative;
  background-color: bisque;
  width: 100%;
  margin-bottom: 20px;
  .button {
    position: absolute;
    right: 13px;
    z-index: 99;
  }
}

::v-deep {
  .footer .el-button {
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
  .avatar {
    width: 40px;
  }
}
</style>
