<template>
  <div>
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
            <b-form @submit.stop.prevent>
              <label for="feedback-user">العنوان</label>
              <b-form-input
                v-model="form.title"
                :state="validationTitle"
                id="feedback-user"
              ></b-form-input>
              <b-form-invalid-feedback :state="validationTitle">
                Your user ID must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationTitle">
                Looks Good.
              </b-form-valid-feedback>
              <label for="feedback-user"> الوصف</label>
              <b-form-input
                v-model="form.descr"
                :state="validationDescr"
                id="feedback-user"
              ></b-form-input>
              <b-form-invalid-feedback :state="validationDescr">
                Your user ID must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationDescr">
                Looks Good.
              </b-form-valid-feedback>
              <label for="feedback-user">tags</label>
              <b-form-input
                v-model="form.tags"
                :state="validationTitle"
                id="feedback-user"
              ></b-form-input>
              <b-form-invalid-feedback :state="validationTitle">
                Your user ID must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationTitle">
                Looks Good.
              </b-form-valid-feedback>
              <textarea v-model="form.content" width="100%"></textarea>
              <div class="container">
                <div>
                  <h2>Single File</h2>
                  <hr />
                  <label
                    >File
                    <input type="file" @change="handleFileUpload($event)" />
                  </label>
                  <br />
                  <button v-on:click="submitFile()">Submit</button>
                </div>
              </div>
            </b-form>
          </b-card>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      file: "",
      form: {
        title: "",
        content: "",
        category_id: 2,
        descr: "",
      },
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Articals",
          href: "#",
        },
        {
          text: "Add Articals",
          active: true,
        },
      ],
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },

    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      console.log(this.form);
      console.log(this.$axios.defaults.headers);
      this.$axios
        .post("http://localhost:8000/api/quetions/", this.form, {})
        .then((res) => {
          console.log(res);
          this.$router.push("admin/articals");
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
  },
  computed: {
    validationTilie() {
      return this.form.title.length > 4 && this.form.title.length < 30;
    },
    validationDescr() {
      return this.form.descr.length > 4 && this.form.descr.length < 30;
    },
    validationContent() {
      return this.form.content.length > 4 && this.form.content.length < 30;
    },
  },
};
</script>
<style scoped>
.margin_top {
  margin-top: 100px;
}
</style>
