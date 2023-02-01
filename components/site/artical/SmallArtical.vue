<template>
  <div>
    <b-row reverse>
      <b-col>
        <h3>{{ artical.title }}</h3>
        <h5>{{ artical.descr }}</h5>
        <h6 class="y">{{ artical.created_at }}</h6>
      </b-col>
      <b-col class="col-1" sm="6" md="1"
        ><img :src="artical.img" alt="" width="100px"
      /></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: ["artical"],
  created() {},
};
</script>

