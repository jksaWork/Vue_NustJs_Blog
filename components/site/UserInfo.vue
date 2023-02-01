<template >
  <div class="text-center">
    <img
      :src="user.img"
      style="
        max-width: 100px;
        max-height: 100px;
        min-width: 99px;
        min-height: 99px;
        border-radius: 50%;
      "
      alt=""
      width="100px"
    />
    <h5 class="text-center mt-2">{{ user.name }}</h5>
    <h5 class="text-center" v-if="user.id / 2 == 1">محرر مقالات</h5>
    <h5 class="text-center" v-else>ادمن المدونه</h5>
  </div>
</template>
<script>
export default {
  props: ["user"],
  name: "user-info",
};
</script>
