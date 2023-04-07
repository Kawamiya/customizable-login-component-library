<template>
  <img width="103" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg">
  <div style="padding-top: 20px" />
  <el-card shadow="never">
    <div style="padding: 20px 26px!important;">
      <h1
        style="margin-bottom: 10px;margin-top:0px;font-size: 28px;font-weight: 400;line-height: 1.2;padding-bottom: 4px;">
        Sign in
      </h1>

      <el-carousel height="200px" ref="carouselMenu" indicator-position="none" arrow="never" :autoplay="false"
                   :loop="false"
                   trigger="click">

        <el-carousel-item>
          <label style="font-weight: 700"> Email or mobile phone number </label>
          <el-input v-model="username" placeholder="Please input your email" />
          <div style="padding-top: 18px" />
          <el-button @click="changeToNextPage" style="width: 100%;border-color: rgb(124 101 43)" color="#f0c14b">
            Continue
          </el-button>
          <div style="padding-top: 20px;font-size: 12px;line-height: 1.5;">
            By continuing, you agree to Amazon's
            <a href="https://www.amazon.com/">Conditions of Use</a>
            and
            <a href="https://www.amazon.com/">Privacy Notice.</a>
          </div>
          <div style="padding-top: 20px">
            <a href="https://www.amazon.com/">Need Help?</a>

          </div>
        </el-carousel-item>

        <el-carousel-item>
          <div>
            {{ username }}
            <a href="https://www.amazon.com/"> Change</a>
          </div>
          <div style="padding-top: 10px;display: flex;justify-content: space-between">
            <h4>Password</h4>
            <a href="https://www.amazon.com/"> Forgot your password?</a>
          </div>
          <el-input v-model="password" placeholder="Please input your password" />
          <div style="padding-top: 18px" />
          <el-button @click="changeToNextPage" style="width: 100%;border-color: rgb(124 101 43)" color="#f0c14b">Sign
            in
          </el-button>
          <div style="padding-top: 18px">
            <input type="checkbox" value="true" tabindex="4" />
            Keep me signed in.
            <a href="https://www.amazon.com/">Details</a>
          </div>


        </el-carousel-item>

      </el-carousel>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "AmazonCentral",
  data() {
    return {
      username: "",
      password: ""

    };
  },
  methods: {
    login() {
      const username = "abc";
      const password = "abc";
      console.log(username, password);
    },
    changeToNextPage() {
      this.$refs.carouselMenu.next();
    }
  }

};
</script>

<style scoped>
.el-card {
  height: min-content;
  min-height: 282px;
  width: 350px;
  border-color: #dcdcdc;
  font-family: "Amazon Ember", Arial, sans-serif;
  font-size: 13px;
  line-height: 19px;
  color: #111;
}


h1 {
  font-family: "Amazon Ember", Arial, sans-serif;
}

h4 {
  margin: 0;
}

a {
  color: #0066c0;
  text-decoration: none;
}

.el-card ::v-deep .el-card__body {
  padding: 0;
}

</style>