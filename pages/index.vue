<template>
  <b-container>
    <div class="content margin_top">
      <h2 class="custom_head"><span>نقره</span></h2>
    </div>
    <div class="row pb-5">
      <div class="col-md-6 text-center p-3">
        <img :src="require('~/static/index.svg')" class="index_img" alt="" />
      </div>
      <div class="col-md-6">
        <p class="artical_content">
          الويب يعني ثقافة المشاركة، لذلك نعتقد في مدونة توتومينا بأن المعلومة
          مهما كانت بسيطة لا يجب أن تبقى حكرا على أشخاص معينين بل يجب مشاركتها
          مع الآخرين وبذلك نرتقي بأنفسنا وبمحتوى لغتنا العربية العزيزة على
          الإنترنت.
        </p>
      </div>
    </div>
    <hr />
    <LastArtical :type="{ last: true, title: 'اعلي المشاهدات' }" />
    <hr />

    <LastArtical :type="{ last: false, title: 'اعلي المشاهدات' }" />
    <!-- <LastArtical2 /> -->

    <div class="pb-5">
      <h2 class="custom_head"><span> المحررين </span></h2>
      <div class="auther_row">
        <div class="auth text-center" v-for="user in users" :key="user">
          <UserInfo :user="user" />
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
// import LastArtical from "~/components/site/artical/LastArtical";
import LastArtical from "~/components/site/artical/LastArtical";
import UserInfo from "~/components/site/UserInfo";
// import LastArtical2 from "~/components/site/artical/SmallArtical";
export default {
  head: {
    title: "Blog | Home Page",
  },
  layout: "site",
  components: { LastArtical, UserInfo },
  data: () => ({
    users: {},
  }),
  created() {
    this.$axios.get("http://localhost:8000/api/user").then((res) => {
      console.log(res);
      this.users = res.data;
    });
  },
};
</script>
<style scoped>
.margin_top {
  margin-top: 100px;
}
</style>
