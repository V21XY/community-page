<template>
  <div class="main">
    <UnLoginHeader v-if="id == ''"></UnLoginHeader>
    <LoginHeader v-else></LoginHeader>
    <div class="center">
      <div class="action" v-for="(info, index) in data" :key="index">
        <div class="header" v-if="info.type === 'share'">
          <el-avatar
            shape="square"
            class="avatar"
            fit
            :src="info.avatar"
          ></el-avatar>
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
        </div>

        <div class="header" v-else>
          <el-avatar
            shape="square"
            class="avatar"
            fit
            :src="info.avatar"
          ></el-avatar>
          <div class="name">
            <div class="username" style="font-size: 17px">
              {{ info.username }}
            </div>
            <div class="time" style="font-size: 14px; margin-top: 5px">
              {{ info.public_date }}
            </div>
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
        </div>
        <div class="content">
          {{ info.content }}
        </div>
        <div class="photo">
          <!-- <img
            v-for="(item, index) in 9"
            :key="index"
            src="http://localhost:3000/upload/1646146021359%E5%91%A8%E5%BF%97%E8%B4%A4.jpg"
            alt=""
            class="image"
          /> -->
          <el-image
            v-for="(item, index) in info.photoList"
            :key="index"
            alt=""
            class="image"
            :src="item"
            :preview-src-list="info.photoList"
          >
          </el-image>
        </div>
        <div class="footer">
          <el-button
            plain
            size="mini"
            icon="el-icon-share"
            @click="share(info.id, info.aid)"
          ></el-button>
          <el-button
            plain
            size="mini"
            icon="el-icon-chat-line-round"
            @click="comment(info.id, info.aid)"
            >{{ info.commentNum }}</el-button
          >
          <el-button
            :islike="islike"
            plain
            size="mini"
            :icon="islike === false ? 'el-icon-star-off' : 'el-icon-star-on'"
            @click="like(info.aid)"
            >{{ info.likeNum }}</el-button
          >
        </div>

        <div class="comment-box" v-show="commentId === info.aid">
          <div>
            <el-input
              style="margin: 10px 0"
              placeholder="发表你的评论"
              type="textarea"
              :autosize="{ minRows: 2 }"
              v-model="comment_content"
            >
            </el-input>
          </div>
          <div class="postConment">
            <el-button
              type="primary"
              size="mini"
              @click="postComment(info.aid, info.commentNum)"
              class="button"
              >评论</el-button
            >
          </div>
          <div v-for="(item, index) in commentList" :key="index">
            <div class="header">
              <el-avatar
                shape="square"
                :src="item.avatar"
                class="avatar"
              ></el-avatar>
              <div class="name">
                <div class="username" style="font-size: 17px">
                  {{ item.username }}
                </div>
                <div class="time" style="font-size: 14px; margin-top: 5px">
                  {{ item.public_date }}
                </div>
              </div>
            </div>
            <div class="content">{{ item.content }}</div>
            <el-divider></el-divider>
          </div>
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
      formData: {
        avatar: "",
        username: "TheV21",
        time: "26分钟前",
        content: "这是一段内容",
        photoList: [
          "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2456468987,3284231714&fm=26&gp=0.jpg",
        ],
      },
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
      axios.get("/api/actions").then((response) => {
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

    like(did) {
      axios
        .post("/api/postLike", {
          did: did,
        })
        .then((res) => {
          if (res.data.data) {
            this.$message({
              message: "点赞成功！",
              type: "success",
            });
          }
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
              // this.reload();
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
  }
}

.avatar {
  margin: 8px;
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
