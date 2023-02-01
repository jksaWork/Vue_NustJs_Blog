<template>
  <div>
    <HeaderOFSite />
    <Nuxt />
    <FootererOFSite />
  </div>
</template>
<script>
import FooterOFSite from "~/components/admin/Footer";
import HeaderOFSite from "~/components/admin/HeaderOFSite";
// import Sidebar from "~/components/admin/Sidebar.vue";
export default {
  components: { HeaderOFSite, FooterOFSite },
};
</script>
