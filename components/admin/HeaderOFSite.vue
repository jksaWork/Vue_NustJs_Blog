<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <span class="my-2"><Sidebar /></span>
          </li>
          <nuxt-link class="navbar-brand" to="/admin/Dashboard">
            <li><span>Navbar</span></li>
          </nuxt-link>
        </ul>
        <b-row>
          <b-col class="">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <template v-if="!isAuthenticated">
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link active"
                      aria-current="page"
                      to="login"
                      >Login</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link active"
                      aria-current="page"
                      to="/register"
                      >Register</nuxt-link
                    >
                  </li>
                </template>
                <template v-else>
                  <li class="nav-item" @click="logout">
                    <nuxt-link
                      class="nav-link active"
                      aria-current="page"
                      to="#"
                      >Logout</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="nav-link active"
                      aria-current="page"
                      to="/profile"
                    >
                      Profile
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
          </b-col>
          <b-col class="ml-auto"> </b-col>
        </b-row>
      </div>
    </nav>
  </div>
</template>

  <script>
import Sidebar from "./SideBar";
export default {
  components: {
    Sidebar,
  },
  methods: {
    async logout() {
      await this.$auth.logout(); // this method will logout the user and make token to false on the local storage of the user browser
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
    getUserInfo() {
      return this.$store.getters.getUserInfo; // it check if user isAuthenticated
    },
  },
};
</script>
