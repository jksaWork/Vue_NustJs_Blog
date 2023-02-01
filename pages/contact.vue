<template>
  <div class="">
    <div class="content margin_top">
      <h1 class="custom_head"><span>اتصل بنا</span></h1>
      <p class="contant_us">
        سنكون سعداء جدا بالإستماع لإقتراحاتكم وملاحظاتم حول موقع نقره والدروس
        التي نقترحها على موقعنا. يمكنكم كذلك اقتراح الدروس التي تودون أن نتطرق
        إليها في قادم الأيام وسنحاول قدر المستطاع تلبية جميع طلباتكم.
      </p>
    </div>
    <div class="row align-center">
      <div class="col-md-6">
        <div class="media face">
          <div class="media_img">
            <img
              :src="require('~/assets/img/face.svg')"
              alt="whats app"
              title="whats app"
            />
          </div>
          <div class="media_data">Nagrahblog</div>
        </div>
        <div class="media whats">
          <div class="media_img">
            <img
              :src="require('~/assets/img/tel.svg')"
              alt="whats app"
              title="whats app"
            />
          </div>
          <div class="media_data">Nagrah@me.ue</div>
        </div>
        <div class="media twitter">
          <div class="media_img">
            <img
              :src="require('~/assets/img/twitter.svg')"
              alt="whats app"
              title="whats app"
            />
          </div>
          <div class="media_data">nagrahBlog</div>
        </div>
        <div class="media email">
          <div class="media_img">
            <img
              :src="require('~/assets/img/email.svg')"
              alt="whats app"
              title="whats app"
            />
          </div>
          <div class="media_data">Nagrah@gmail.com</div>
        </div>
        <div class="media tel">
          <div class="media_img">
            <img
              :src="require('~/assets/img/whats.svg')"
              alt="whats app"
              title="whats app"
            />
          </div>
          <div class="media_data">0915477450</div>
        </div>
      </div>
      <div class="col-md-6">
        <p class="artical_content">
          ايضا يمكنكم متابعتنا علي وسائل التواصل الاجتماعي وسوف نسعد كثيرا
          بوجودكم هناك
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: "Blog | Contact",
  },
  layout: "site",
};
</script>
<style scoped>
.margin_top {
  margin: 100px 0;
}
</style>
