<template>
  <div>
    <div class="custom_container">
      <div>
        <b-button variant="outline-danger" @click="deletePost()"
          >delete</b-button
        >
        <b-button variant="outline-info" @click="editPost()">edit</b-button>
        <b-button variant="outline-success" @click="activePost()"
          >active</b-button
        >
      </div>
      <div class="content">
        <div class="artical_header">
          <div class="show_artical_data">
            <h3>{{ artical.title }}</h3>
            <h5>{{ artical.descr }}</h5>
            <h5>{{ artical.created_at }}</h5>
            <h5 class="tags">
              <ul class="tags_ul">
                <li v-for="tag in tags" :key="tag">
                  <a href="articals/"> {{ tag }}</a>
                </li>
              </ul>
            </h5>
          </div>
          <div class="show_artical_img">
            <img :src="artical.img" alt="" />
          </div>
        </div>
        <div class="content">
          <!-- /this i spost here  -->
          <p class="artical_content">
            {{ artical.content }}
          </p>
          <!-- some articals  -->
        </div>
      </div>

      <!-- user information  -->
      <div class="auther_data">
        <div class="auther_desc"></div>
        <div class="auther_img text-center">
          <img src="user_photo/" alt="" class="user_profile mb-1" />
          <h5 class="text-center"></h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  middleware: "auth",
  layout: "admin",
  data: () => ({
    tags: ["jksa", "altigani"],
    artical: [],
  }),
  async fetch({ params }) {
    console.log(params.articals);

    // Axios.get("http://localhost:8000/api/quetions/" + params.articals).then(
    //   (res) => {
    //     this.artical = res.data.data;
    //     console.log(this.artical);
    //     this.tags = res.data.data.descr.split(" ");
    //   }
    // );

    //   Axios.get("http://localhost:8000/api/quetions")
    //     .then((res) => {
    //       this.artical = res.data.data;
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
    // },
  },
  mounted() {
    Axios.get(
      "http://localhost:8000/api/quetions/" + this.$route.params.articals
    ).then((res) => {
      this.artical = res.data.data;
      console.log(this.artical);
      this.tags = res.data.data.descr.split(" ");
    });
  },
  methods: {
    deletePost() {},
    editPost() {},
    activePost() {},
  },
};
</script>

