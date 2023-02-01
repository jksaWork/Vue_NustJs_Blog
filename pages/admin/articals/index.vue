<template>
  <b-container>
    <div class="margin_top">
      <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-card>
          <b-row class="pa-2">
            <b-col class="mr-auto text-left">
              <nuxt-link to="articals/add">
                <b-button variant="outline-primary" size="sm"
                  >اضافه مقال
                </b-button>
              </nuxt-link>
            </b-col>
            <b-col class="">
              <h3>المدونه - المقالات</h3>
              <b-card-sub-title>كل المقالات</b-card-sub-title>
            </b-col>
          </b-row>
          <table class="table border-less borderless" borderless>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">عنوان</th>
                <th scope="col">صوره المقال</th>
                <th scope="col">المستخدم</th>
                <th scope="col">العمليات</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="artical in articals" :key="artical.id">
                <th scope="row">{{ artical.id }}</th>
                <td>{{ artical.title }}</td>
                <!-- <td>{{ artical.likes.lingth }}</td> -->
                <td>{{ artical.user }}</td>
                <img :src="artical.img" alt="" width="50px" />
                <td>
                  <!-- Using value -->
                  <b-button
                    v-b-modal="'my-modal' + artical.id"
                    variant="outline-danger"
                    size="sm"
                    >delete</b-button
                  >
                  <nuxt-link :to="'articals/' + artical.id">
                    <b-button variant="outline-info" size="sm">show</b-button>
                  </nuxt-link>
                  <b-button
                    variant="outline-warning"
                    size="sm"
                    @click="ActivePost(artical.id)"
                    >active</b-button
                  >

                  <!-- The modal -->
                  <b-modal :id="'my-modal' + artical.id">
                    <template #modal>
                      <!-- Emulate built in modal header close button action -->
                      <h5>Modal Header</h5>
                    </template>

                    <template #default="">
                      <h2><p>هل انت متاكد من حذف العنصر</p></h2>
                    </template>

                    <template #modal-footer="{ ok, cancel }">
                      <!-- Emulate built in modal footer ok and cancel button actions -->
                      <b-button
                        size="sm"
                        variant="danger"
                        @click="
                          cancel();
                          deletePost(artical.id);
                        "
                      >
                        delete
                      </b-button>
                      <b-button size="sm" variant="light" @click="ok()">
                        Cancel
                      </b-button>

                      <!-- Button with custom close trigger value -->
                    </template>
                  </b-modal>
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>
  </b-container>
</template>
<script>
import Axios from "axios";
export default {
  middleware: "auth",
  layout: "admin",
  data: () => ({
    articals: [],
    items: [
      {
        text: "Admin",
        href: "#",
      },
      {
        text: "Manage",
        href: "#",
      },
      {
        text: "Library",
        active: true,
      },
    ],
  }),
  methods: {
    ActivePost(id) {
      Axios.get("http://localhost:8000/api/quetions/" + id).then((res) => {
        console.log(res);
        this.makeActiveToast();
      });
    },
    deletePost(id) {
      Axios.delete("http://localhost:8000/api/quetions/" + id).then((res) => {
        console.log(res);
        this.makeToast();
      });
    },
    makeToast() {
      this.$bvToast.toast(`تم حذف العنصر بنجاح `, {
        title: "الاقسام ",
        autoHideDelay: 5000,
      });
    },
    makeActiveToast() {
      this.$bvToast.toast(`تم تغير حاله العنصر بنجاح العنصر بنجاح `, {
        title: "الاقسام ",
        autoHideDelay: 5000,
      });
    },
  },
  async fetch() {
    Axios.get("http://localhost:8000/api/quetions")
      .then((res) => {
        this.articals = res.data.data;
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
  fetchOnServer: true,
};
</script>
<style scoped>
@import url("~/static/style.css");
.margin_top {
  margin-top: 100px;
}
</style>
