<template>
  <div class="main">
    <el-form
      :model="user"
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="demo-ruleForm"
    >
      <div style="margin-right: 20px">
        <el-form-item label="username" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button
          style="float: left"
          type="primary"
          @click="submitForm('ruleForm')"
        >
          login
        </el-button>
        <el-button @click="ToRegister()">register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FormRules } from "element-plus";

interface User {
  username: string;
  password: string;
}

const user = ref<User>();
const rules = ref<FormRules>({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 25, message: "长度在 3 到 25 个字符", trigger: "blur" },
  ],
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
