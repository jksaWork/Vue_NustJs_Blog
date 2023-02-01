<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header>
      <b-button title="Align left"> </b-button>
      Toggle Sidebar</b-button
    >
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      bg-background="dark"
      backdrop
    >
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Admin Dashboard Meun</h4>
          <b-list-group>
            <nuxt-link to="sections"
              ><b-list-group-item>الاقسام </b-list-group-item></nuxt-link
            >

            <nuxt-link to="articals"
              ><b-list-group-item>المقالات </b-list-group-item>
            </nuxt-link>

            <nuxt-link to="users"
              ><b-list-group-item>المستخدمين</b-list-group-item>
            </nuxt-link>
            <nuxt-link to="/commoits">
              <b-list-group-item> التعليقات </b-list-group-item>
            </nuxt-link>
            <nuxt-link to="/sections">
              <b-list-group-item>الاعجابات</b-list-group-item>
            </nuxt-link>
          </b-list-group>

          <b-button variant="primary" block @click="hide"
            >Close Sidebar</b-button
          >
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
