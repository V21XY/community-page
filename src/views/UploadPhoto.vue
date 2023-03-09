<template>
  <div class="main">
    <LoginHeader></LoginHeader>
    <div class="content">
      <div class="left">
        <el-upload
          list-type="picture-card"
          class="avatar-uploader"
          action
          :data="data"
          ref="upload"
          multiple
          :auto-upload="upload1"
          :http-request="upLoad"
          :before-upload="beforeAvatarUpload"
        >
          <i slot="trigger" class="el-icon-plus"></i>
          <img :src="imgurl" alt="" />
        </el-upload>
      </div>
      <div class="right">
        <img
          src="../assets/img/img-4.svg"
          style="height: 212px; width: 360px"
          alt=""
        />

        <div class="right-header" style="margin-bottom: 20px">
          <p
            style="
              font-size: 14px;
              color: #5a6268;
              font-weight: bold;
              text-align: center;
            "
          >
            需要提交1-100张照片，且每张不超过50MB
          </p>
          <el-button
            type="primary"
            round
            @click="submitUpload"
            style="
              width: 300px;
              height: 50px;
              border-radius: 50px;
              margin: 12px 50px;
              font-size: 21px;
              font-weight: bolder;
            "
            >发布</el-button
          >
        </div>

        <el-form
          :model="upload"
          style="padding-left: 25px"
          v-if="value === 'photo'"
        >
          <el-form-item>
            <h3 style="float: left">发布类型：</h3>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <h3 style="float: left">标题</h3>
            <el-input
              type="text"
              v-model="upload.text"
              maxlength="15"
              show-word-limit
              id="title"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <h3 style="float: left">描述</h3>
            <el-input
              id="introduce"
              type="textarea"
              :rows="6"
              placeholder="分享镜头后的故事"
              v-model="upload.textarea"
              maxlength="50"
              show-word-limit
            >
            </el-input>
          </el-form-item>
        </el-form>

        <el-form
          :model="upload"
          style="padding-left: 25px"
          v-else-if="value === 'action'"
        >
          <el-form-item>
            <h3 style="float: left">发布类型：</h3>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <h3 style="float: left">内容</h3>
            <el-input
              id="introduce"
              type="textarea"
              :rows="6"
              placeholder="分享你的故事"
              v-model="upload.textarea"
              maxlength="50"
              show-word-limit
            >
            </el-input>
          </el-form-item>
        </el-form>

        <el-form
          :model="upload"
          style="padding-left: 25px"
          v-else-if="value === 'shooting'"
        >
          <el-form-item>
            <h3 style="float: left">发布类型：</h3>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <p style="text-align: left">是否收费</p>
            <el-radio v-model="free" :label="mf">免费</el-radio>
            <el-radio v-model="free" :label="sf">收费</el-radio>
          </el-form-item>
          <el-form-item v-if="free === 0">
            <h3 style="float: left">收费</h3>
            <el-input
              type="text"
              v-model="upload.money"
              maxlength="15"
              show-word-limit
              id="title"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <h3 style="float: left">坐标</h3>
            <el-input
              type="text"
              v-model="upload.local"
              maxlength="15"
              show-word-limit
              id="title"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <h3 style="float: left">约拍要求</h3>
            <el-input
              id="introduce"
              type="textarea"
              :rows="6"
              placeholder="注意事项"
              v-model="upload.textarea"
              maxlength="50"
              show-word-limit
            >
            </el-input>
          </el-form-item>
        </el-form>
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
  data() {
    return {
      upload1: false,
      dialogImageUrl: "",
      dialogVisible: false,
      imgurl: "",
      free: 1,
      sf: 0,
      mf: 1,
      data: {
        username: "zzx",
      },
      options: [
        {
          value: "photo",
          label: "相册",
        },
        {
          value: "action",
          label: "动态",
        },
        {
          value: "shooting",
          label: "约拍",
        },
      ],
      value: "photo",
      dialogImageUrl: "",
      fileList: [],
      dialogVisible: false,
      disabled: false,
      upload: {
        money: 0,
      },
      keywordsvalue: [],
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },

    // 自定义上传图片
    upLoad(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("content", this.upload.text);
      formData.append("detail", this.upload.textarea);
      formData.append("money", this.upload.money);
      formData.append("free", this.free);
      formData.append("local", this.upload.local);
      switch (this.value) {
        case "action":
          axios.post(`/api/uploadaction`, formData).then((res) => {
            location.href = "../action";
          });
          break;
        case "shooting":
          axios.post(`/api/uploadshooting`, formData).then((res) => {
            location.href = "../shooting";
          });
          break;
        case "photo":
          axios.post(`/api/uploadphoto`, formData).then((res) => {
            location.href = "../discover";
          });
          break;
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png";
      if (!isJPG) {
        this.$message.error("只能上传图片!");
      }
      return isJPG;
    },
  },
};
</script>
<style scoped>
.content {
  display: flex;
}
.left {
  width: 79%;
}
.right {
  width: 21%;
  height: 92vh;
  background-color: rgb(243, 242, 241);
}
</style>