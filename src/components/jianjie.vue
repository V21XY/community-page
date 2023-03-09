
<template>
  <div class="main">
    <div class="userInfo">
      <el-form
        ref="form"
        :model="form"
        label-width="100px"
        :rules="rules"
        :disabled="disabled"
      >
        <el-form-item label="用户名：">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址：">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="自我介绍：">
          <el-input type="textarea" v-model="form.introduce"></el-input>
        </el-form-item>
        <el-form-item label="角色：">
          <el-radio-group v-model="form.role">
            <el-radio label="摄影师"></el-radio>
            <el-radio label="模特"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('form')"
            size="small"
            v-show="!disabled"
            >修改</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="userInfo">
      <el-form
        ref="form"
        :model="form"
        label-width="100px"
        :rules="rules"
        :disabled="disabled"
      >
        <el-form-item label="旧密码" prop="pass">
          <el-input
            type="password"
            v-model="form.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="checkPass">
          <el-input
            type="password"
            v-model="form.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('form')"
            size="small"
            v-show="!disabled"
            >修改</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
  props: {
    id: String,
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {},
      data: [],
      disabled: false,
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  created() {
    console.log(Cookies.id);
  },
  mounted() {
    axios
      .get(`/api/baseInfo`, {
        params: {
          id: this.id,
        },
      })
      .then((response) => {
        this.data = response.data;
        console.log(this.data);
        this.form = this.data.data[0];
        this.disabled = this.data.disabled;
        // console.log(response);
      });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post(`/api/changeUserInfo`, {
              form: this.form,
            })
            .then((res) => {
              console.log(res);
            });
        } else {
          console.log("提交失败");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #f1f2f3;
  // margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}

.main .userInfo {
  padding: 0 30%;
  // background-color: cadetblue;
}

.bg-purple {
  background: #d3dce6;
}

.grid-content {
  width: 100%;
  border-radius: 4px;
  min-height: 36px;
  height: 250px;
  margin-bottom: 20px;
}
</style>
