<template>
  <b-container>
    <div class="content margin_top">
      <h2 class="custom_head"><span>المقالات</span></h2>
    </div>
    <div class="margin_top_2">
      <b-button
        size="sm"
        pill
        variant="light"
        class="px-3 margin_a"
        v-for="category in categories"
        :key="category"
        @click="getByID(category.id)"
        >{{ category.name }}</b-button
      >
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
    title: "Blog | articals ",
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
      categories: [],
    };
  },
  created() {
    this.$axios.get("http://localhost:8000/api/quetions").then((res) => {
      console.log(res);
      this.articals = res.data.data;
    });
    this.$axios.get("http://localhost:8000/api/categories").then((res) => {
      console.log(res);
      this.categories = res.data;
    });
  },
  methods: {
    getByID(id) {
      this.$axios
        .get("http://localhost:8000/api/quetions/withid/" + id)
        .then((res) => {
          console.log(res);
          this.articals = res.data.data;
        });
    },
  },
};
</script>

<style scoped>
.margin_top {
  margin: 100px 0;
}
.margin_top_2 {
  margin: 20px 0;
}
.margin_a {
  margin: 3px 10px;
}
</style>
