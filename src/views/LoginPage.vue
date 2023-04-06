<template>
  <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>


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
