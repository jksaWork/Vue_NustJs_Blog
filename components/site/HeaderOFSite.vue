<template>
  <div>
    <div>
      <b-navbar toggleable="lg" sticky fixed="true">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b
                ><b-nav-item href="#">
                  <nuxt-link to="/about">
                    <h5>عن المدونه ؟</h5>
                  </nuxt-link>
                </b-nav-item></b
              >ٌ
              <b
                ><b-nav-item href="#">
                  <nuxt-link to="/contact">
                    <h5>اتصل بنا</h5>
                  </nuxt-link>
                </b-nav-item></b
              >
              <b
                ><b-nav-item href="#">
                  <nuxt-link to="all-articals">
                    <h5>المقالات</h5>
                  </nuxt-link>
                </b-nav-item></b
              >
              <b
                ><b-nav-item href="#">
                  <nuxt-link to="/">
                    <h5>الرئيسه</h5>
                  </nuxt-link>
                </b-nav-item></b
              >
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!-- serach components -->
              <!-- <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Search</b-button
                >
              </b-nav-form> -->
              <b-navbar-brand href="#">
                <span class="header_of_web">نقره</span>
                <img
                  :src="require('~/assets/img/logo.png')"
                  alt=""
                  style="background: #3f3f3f; padding: 10px
                  margin: 0px 10px"
                  width="50px"
                  background-color="primary"
                />
              </b-navbar-brand>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header_of_web {
  font-size: 30px;
  margin: 0 15px;
}
</style>
