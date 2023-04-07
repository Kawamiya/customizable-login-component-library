<template>
  <el-card shadow="never" class="box-card">
    <div class="cardContainer">
      <div class="cardHeader">
        <svg width="75" height="24" xmlns="http://www.w3.org/2000/svg">
          <g id="Layer_1">
            <title>Layer 1</title>
            <g stroke="null" id="svg_18">
              <path stroke="#FFB27C"
                    d="m15.61592,0.7114c-0.10593,0.38261 -0.95237,1.82066 -2.01265,3.6986c-0.82731,1.46532 -1.13696,2.45291 -1.69486,3.18845c-0.70714,0.9323 -1.40398,1.89111 -2.33043,3.57107c-0.76397,1.38533 -1.358,2.80789 -2.01265,3.57107c-0.54877,0.63975 -1.05929,1.0203 -1.483,1.53046c-0.63557,0.76523 -1.16522,1.65799 -1.37707,2.16815l-0.10593,0"
                    id="svg_1" stroke-width="0" fill="none" />
              <path stroke="#FFB27C"
                    d="m14.23885,1.34909c0,0.12754 -0.12375,0.10959 -0.7415,1.0203c-0.76397,1.12628 -1.57167,2.18295 -2.33043,3.44353c-0.9324,1.54906 -1.81817,3.01748 -2.75415,4.33629c-0.68123,0.95986 -1.21058,1.71199 -1.69486,2.42322c-0.47488,0.69742 -0.84215,1.28051 -1.27114,1.91307c-0.52326,0.77157 -0.98446,1.36804 -1.37707,1.91307c-0.34702,0.48175 -0.42371,0.63769 -0.52964,0.89277l-0.21186,0.12754"
                    id="svg_2" stroke-width="0" fill="none" />
              <path stroke="null" id="svg_6"
                    d="m-0.40321,5.47808l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.9679l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.9679l3.21924,-6.33955l-3.21924,-6.33955z"
                    stroke-width="0" fill="#5b9dff" />
              <path stroke="null" id="svg_14"
                    d="m12.41416,5.47808l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z"
                    stroke-width="0" fill="#FFAAB8" />
              <path stroke="null" id="svg_15"
                    d="m25.44339,5.8607l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z"
                    stroke-width="0" fill="#FFF093" />
              <path stroke="null" id="svg_16"
                    d="m38.15483,5.98824l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z"
                    stroke-width="0" fill="#5b9dff" />
              <path stroke="null" id="svg_17"
                    d="m50.9722,5.8607l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z"
                    stroke-width="0" fill="#D1FFB4" />
            </g>
            <path stroke="null" id="svg_19"
                  d="m63.65751,5.72126l2.78632,-6.08969l2.95987,6.46893l2.95987,-6.46893l2.78635,6.08969l-2.95987,6.46899l2.95987,6.46899l-2.78635,6.08975l-2.95987,-6.46899l-2.95987,6.46899l-2.78632,-6.08975l2.95985,-6.46899l-2.95985,-6.46899z"
                  stroke-width="0" fill="#FFAAB8" />
          </g>
        </svg>
        <div class="wordContainer">
          <h1 class="signinWord">
            <span>Sign in</span>
          </h1>
        </div>
        <div class="myWord">
          <span>to continue to XXXXX</span>
        </div>
      </div>
      <div class="cardBody">
        <el-carousel ref="carouselMenu" indicator-position="none" arrow="never" :autoplay="false" :loop="false"
                     trigger="click">
          <el-carousel-item>
            <el-input v-model="input" placeholder="Please input your email" />
            <div style="width: 100%;padding-top: 10px">
              <router-link to="/404">Forgot email?</router-link>
            </div>
            <div style="width: 100%;margin-top: 36px;font-family: inherit;font-size: inherit">
              <span>Not your computer? Use Guest mode to sign in privately.</span>
            </div>
            <div style="width: 100%;padding-top: 10px">
              <router-link to="/404">Learn more</router-link>
            </div>
            <div style="display: flex;justify-content: space-between;margin-top: 50px">
              <router-link to="/404">Create account</router-link>
              <el-button class="firstnext" @click="changeToNextPage" type="primary" style="height: 36px;width: 80px">
                Next
              </el-button>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <el-input style="margin-top: 60px" v-model="input" placeholder="Enter your password" />

            <div style="display: flex;justify-content: space-between;margin-top: 50px">
              <router-link to="/404">Forgot password?</router-link>
              <el-button @click="login" type="primary" style="height: 36px;width: 80px">Next</el-button>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </el-card>
  <div class="footer">
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in countries"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
    <div style="margin-top: 10px">
      <el-button text="true" size="small">Help</el-button>
      <el-button text="true" size="small">Privacy</el-button>
      <el-button text="true" size="small">Terms</el-button>
    </div>
  </div>

</template>

<!--<script lang="ts"> export default { name: "GoogleCentral" };</script>-->

<script>
/**
 * @vue-data {Array} countries - countries list
 * @vue-event {} changeToNextPage - change to next login page
 * @vue-event {} login - login
 */
export default {
  name: "GoogleCentral",
  data() {
    return {
      countries: [
        "English (United States)",
        "Chinese",
        "Janpanese"
      ],
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
<!--<script lang="ts" setup>-->
<!--import { ref } from "vue";-->
<!--import { getCurrentInstance } from "vue";-->
<!--const { proxy } = getCurrentInstance();-->

<!--const countries = ref<Array<String>>([-->
<!--  "English (United States)",-->
<!--  "Chinese",-->
<!--  "Janpanese"-->
<!--]);-->

<!--const changeToNextPage = () => {-->
<!--  proxy.$refs.carouselMenu.next();-->
<!--};-->

<!--function login() {-->
<!--const username = "abc";-->
<!--const password = "abc";-->
<!--console.log(username, password);-->
<!--}-->
<!--</script>-->


<style scoped>
.cardContainer {
  padding: 48px 40px 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cardHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.wordContainer {
  margin: auto -40px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
}

.signinWord {
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  padding-top: 16px;
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  padding-bottom: 0;
  line-height: 1.3333;
}

.myWord {
  padding-bottom: 1px;
  padding-top: 7px;
  color: #202124;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.5;
  font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif;
}

.cardBody {
  margin: auto -40px;
  padding-top: 24px;
  width: 100%;
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  font-size: 14px;
  color: darkgray;
}

.box-card {
  width: 450px;
  min-height: 500px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  --el-card-border-radius: 0px;
  --el-card-border-color: transparant;
}

.el-card ::v-deep .el-card__body {
  padding: 0;
}

.el-input {
  font-size: 16px;
  height: 50px;
}

.router-link-active {
  font-size: 14px;
  font-weight: 500;
  color: #1a73e8;
  text-decoration: none;
  font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif;
}

a {
  font-size: 14px;
  font-weight: 500;
  color: #1a73e8;
  text-decoration: none;
  font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif;
}

.footer {
  width: 450px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.el-select {
  --el-select-border-color-hover: white;
  --el-select-close-hover-color: white;
  --el-select-disabled-border: white;
  --el-select-input-color: black;
}
</style>