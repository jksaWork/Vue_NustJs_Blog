<template>
  <div>
    <HeaderOFSite />
    <b-container>
      <Nuxt keep-alive />
    </b-container>
    <SocilalLInk />
    <FooterOFSite />
  </div>
</template>
<script>
import FooterOFSite from "~/components/site/FooterOFSite";
import HeaderOFSite from "~/components/site/HeaderOFSite";
import SocilalLInk from "~/components/site/SocilalLInk";
export default {
  components: { HeaderOFSite, FooterOFSite, SocilalLInk },
};
</script>
<style scoped>
@import url("~/static/style.css");
</style>
