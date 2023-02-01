<template>
  <b-container>
    <div class="content">
      <h2 class="custom_head"><span>المقالات</span></h2>
    </div>
    <div>
      <b-button size="sm" pill>Button</b-button>
      <b-button size="sm" pill variant="primary">Button</b-button>
      <b-button size="sm" pill variant="outline-secondary">Button</b-button>
      <b-button size="sm" pill variant="success">Button</b-button>
      <b-button size="sm" pill variant="outline-danger">Button</b-button>
      <b-button size="sm" pill variant="info">Button</b-button>
    </div>
    <b-row>
      <b-col v-for="i in articals" :key="i" sm="6" md="4">
        <!-- mohammed altigin osma -->
        <Artical :artical="i" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";
import Artical from "~/components/site/artical/Artical";
// import LastArtical2 from "~/components/site/artical/SmallArtical";
export default {
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  layout: "site",
  components: { Artical },
  data() {
    return {
      articals: [],
    };
  },
  created() {
    this.axios.get("http://localhost:8000/api/quetions").then((res) => {
      console.log(res);
      this.articals = res.data.data;
    });
  },
};
</script>
