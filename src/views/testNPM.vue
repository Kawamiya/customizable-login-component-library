<template>
<amazon-central/>
</template>

<script>
import GoogleCentral from "@/packages/Google";
import AmazonCentral from "@/packages/Amazon";
export default {
  name: "testNPM",
  components: { AmazonCentral, GoogleCentral }
};
</script>

<style scoped>

</style>