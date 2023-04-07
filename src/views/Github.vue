<template>
  <svg height="48" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="48" data-view-component="true"
       class="octicon octicon-mark-github">
    <path
      d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
  </svg>
  <div style="padding-top: 20px" />
  <h1>Sign in to GitHub</h1>
  <div style="padding-top: 15px" />
  <el-card class="login-card" shadow="never">
    <label> Username or email address </label>
    <div style="padding-top: 5px" />
    <el-input v-model="username" placeholder="Please input your username/email" />
    <div style="padding-top: 15px;padding-bottom:5px ;display: flex;justify-content: space-between">
      Password
      <a href="https://github.com/">Forgot password?</a>
    </div>
    <el-input v-model="password" placeholder="Please input your password" />
    <div style="padding-top: 15px" />
    <el-button @click="changeToNextPage" style="width: 100%;border-color: rgb(24 119 51)" color="rgb(24 119 51)">Sign
      in
    </el-button>
  </el-card>

  <div style="padding-top: 20px" />

  <el-card class="register-card" shadow="never">
    New to GitHub?
    <a href="https://github.com/"> Create an account.</a>
  </el-card>
</template>

<script>
export default {
  name: "GithubCentral"
};
</script>

<style scoped>
.el-card ::v-deep .el-card__body {
  padding: 16px;
}

.login-card {
  height: 217px;
  width: 308px;
  border-color: #dcdcdc;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.register-card {
  width: 308px;
  height: 50px;
  border-color: #dcdcdc;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}
a {
  color: #0066c0;
  text-decoration: none;
}
</style>