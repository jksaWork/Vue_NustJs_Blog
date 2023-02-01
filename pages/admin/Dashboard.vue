<template>
  <b-container>
    <b-row>
      <b-col class="sm-6">
        <!-- <BarChart /> -->
      </b-col>
    </b-row>
  </b-container>
</template>

  <script>
// import BarChart from "~/components/admin/dashboard/LineChart";

export default {
  middleware: "auth",
  layout: "admin",
  // components: { BarChart },
  mounted() {
    console.log(this.$auth.isLoggedIn);
    console.log(this.$auth);
  },
  computed: {
    getUserInfo() {
      console.log(this.$store.getters.isAuthenticated);
      // return this.$store.getters.getUserInfo;
    },
  },
};
</script>
