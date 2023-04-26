import GoogleCentral from './Google.vue';
import AmazonCentral from "@/packages/Amazon";
import GithubCentral from "@/packages/Github";
const components = [
  GoogleCentral,
  AmazonCentral,
  GithubCentral
];

const CLCL = (Vue) => {
  components.forEach(com => {
    Vue.component(com.name, com);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  CLCL.install(window.Vue)
}

export default CLCL;
