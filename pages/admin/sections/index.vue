<template>
  <b-container>
    <div class="margin_top">
      <div>
        <b-card title=" المدونه - المقالات " sub-title="كل المقالات">
          <table class="table border-less borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">الاسم</th>
                <th scope="col">العمليات</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in categories" :key="category.id">
                <th scope="row">{{ category.id }}</th>
                <td>{{ category.name }}</td>
                <td>
                  <!-- Using value -->
                  <b-button
                    v-b-modal="'my-modal' + category.id"
                    variant="outline-danger"
                    >delete</b-button
                  >

                  <!-- The modal -->
                  <b-modal :id="'my-modal' + category.id">
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
                          deletePost(category.id);
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
          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
      </div>
    </div>
  </b-container>
</template>
<script>
import Axios from "axios";
export default {
  layout: "admin",
  data: () => ({
    categories: [],
  }),
  methods: {
    deletePost(id) {
      Axios.delete("http://localhost:8000/api/categories/" + id).then((res) => {
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
  },
  async fetch() {
    this.makeToast();
    Axios.get("http://localhost:8000/api/categories")
      .then((res) => {
        this.categories = res.data;
        console.log(res);
      })

      .catch((err) => console.log(err));
  },
  fetchOnServer: true,
};
</script>
<style >
.margin_top {
  margin-top: 100px;
}
</style>
