<template>
  <footer>
    <div class="custom_container">
      <div class="align_itemm row">
        <div class="col-md-6">
          <ul class="footer_links">
            <li>
              <a href="#"> كل الحقوق محفوظه نقره &copy; 2020 - 2021 </a>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="footer_links">
            <li>
              <a href="privcy.php"> من نحن </a>
            </li>
            <li>
              <a href="contact.php"> اتصل بنا </a>
            </li>
            <li>
              <a href="#top"> العوده لاعلي </a>
            </li>
            <li>
              <nuxt-link to="/login">
                <a href="#top"> تسجيل الدخول </a>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "site-ffoter",
};
</script>
<style >
@import url("~/static/style.css");
footer {
  color: #fff;
}
</style>
