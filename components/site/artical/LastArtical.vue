<template>
  <div>
    <h2 class="custom_head">
      <span>{{ type.last ? "اخر المقالات" : type.title }}</span>
    </h2>
    <div class="latest_post_container">
      <div class="latest_post" v-for="i in articals" :key="i">
        <div class="latest_post_data">
          <SmallArtical :artical="i" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SmallArtical from "./SmallArtical";
export default {
  name: "last-artical",
  props: ["type"],
  data() {
    return {
      articals: [],
    };
  },
  components: { SmallArtical },
  created() {
    axios.get("http://localhost:8000/api/quetions/").then((res) => {
      this.articals = res.data.data;
    });
  },
};
</script>
