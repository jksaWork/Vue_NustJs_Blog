<template>
  <div>
    <div class="custom_container margin_top">
      <div class="content">
        <div class="artical_header">
          <div class="show_artical_data">
            <h3>{{ articalData.title }}</h3>
            <h5>{{ articalData.descr }}</h5>
            <h5>{{ articalData.created_at }}</h5>
            <h5 class="tags">
              <ul class="tags_ul">
                <li v-for="tag in tags" :key="tag">
                  <a href="articals/"> {{ tag }}</a>
                </li>
              </ul>
            </h5>
          </div>
          <div class="show_artical_img">
            <img
              v-if="articalData.img"
              :src="articalData.img"
              alt="al not found"
              width="150px"
            />
          </div>
        </div>
        <div class="content">
          <!-- /this i spost here  -->
          <p class="artical_content">
            {{ articalData.content }}
          </p>

          <LastArtical :type="{ last: false, title: 'اعلي المشاهدات' }" />
          <div class="content">
            <h1 class="custom_head">
              <span> بيانات المحرر </span>
            </h1>
          </div>
        </div>
      </div>

      <!-- user information  -->
      <div class="auther_data">
        <div class="auther_desc" v-if="articalData.user">
          {{ articalData.user.descr }}
        </div>
        <div class="auther_img text-center">
          <img
            v-if="articalData.img"
            :src="articalData.user.img"
            alt=""
            class="user_profile mb-1"
          />
          <h5 class="text-center"></h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import LastArtical from "~/components/site/artical/LastArtical";
export default {
  layout: "site",
  components: { LastArtical },
  head: {
    title: "Blog ",
  },
  data() {
    return {
      tags: [],
      articalData: [],
      articals: [],
    };
  },
  async asyncData({ params }) {
    const artical = params.artical; // When calling /abc the slug will be "abc"
    return { artical };
  },
  created() {
    this.getArtical();
  },
  methods: {
    getArtical() {
      axios
        .get("http://localhost:8000/api/quetions/" + this.artical)
        .then((res) => {
          console.log(res);
          this.articalData = res.data.data;
          this.tags = res.data.data.descr.split(" ");
        });
    },
  },
  // computed() {},
};
</script>
<style scoped>
.margin_top {
  margin-top: 100px;
}
</style>
