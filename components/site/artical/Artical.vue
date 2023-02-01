<template>
  <div>
    <div>
      <b-card
        :title="artical.title"
        :img-src="artical.img"
        :img-alt="Image"
        :sub-title="artical.created_at"
        border-variant="light"
        img-top
        tag="article"
        class="mb-2"
      >
        <b-card-text>
          {{ artical.descr }}
        </b-card-text>

        <b-button :href="'articals/' + artical.id" variant="light">
          عرض المقال</b-button
        >
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  props: ["artical"],
  created() {
    console.log("mounted");
  },
};
</script>

