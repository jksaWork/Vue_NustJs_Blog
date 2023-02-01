<template>
  <div class="margin_top">
    <div class="content margin_top">
      <div class="login_card margin_top">
        <div class="text_center">
          <img :src="require('~/static/logo.svg')" alt="" width="100px" />
          <h4 class="text-center">تسجيل الدخول</h4>
        </div>
        <div class="form_grid">
          <div>
            <input type="email" v-model="login.email" />
          </div>
          <div><h5>الايميل</h5></div>
          <div>
            <input type="password" v-model="login.password" />
          </div>
          <div><h5>كلمه السر</h5></div>
        </div>
        <div class="text_center login_btn">
          <button @click="userLogin">تسجيل الدخول</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: "Blog | Register",
  },
  layout: "site",
  data: () => ({
    form: {
      name: "",
      password: "",
      email: "",
    },
  }),
  methods: {
    RegsiteFunction() {
      try {
        this.$axios.post("http://localhost:8000/api/auth/register", this.form);
        // let response = await this.$auth.loginWith("laravelJWT", {
        //   data: {
        //     email: this.form.email,
        //     password: this.form.password,
        //   },
        // });
        // this.$auth.setUser(response.data.user);
        // console.log(user);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
