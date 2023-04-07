import GoogleCentral from './Google.vue';

const components = [
  GoogleCentral
];

const install = (Vue) => {
  components.forEach(com => {
    Vue.component(com.name, com);
  });
};

export default install;
