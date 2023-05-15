<script lang="ts">
export default {
  data: () => ({
    open: ["Users"],
    cruds: [
      ["Create", "mdi-plus-outline", "/register_user"],
      ["Read", "mdi-file-outline", "/read_user"],
      ["Update", "mdi-update", "/edit_user"],
      ["Delete", "mdi-delete", "/delete_user"],
      ["All Accounts", "mdi-account", "/all_accounts"],
    ]
  }),
}
</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
    rel="stylesheet"
    to="/login"
  >
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      />
    </v-list>

    <v-divider />

    <v-list
      density="compact"
      nav
    >
      <v-list-item
        prepend-icon="mdi-home"
        title="Dashboard"
        to="/dashboard"
      />

      <v-list-group value="Users">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          />
        </template>

        <v-list-item
          v-for="([title, icon, link], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
          :to="link"
        />
      </v-list-group>
      <v-list-item
        prepend-icon="mdi-folder"
        title="My Files"
        value="myfiles"
        to="/login"
      />
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Shared with me"
        value="shared"
      />
      <v-list-item
        prepend-icon="mdi-star"
        title="Starred"
        value="starred"
      />
      <v-list-item
        prepend-icon="mdi-logout"
        title="Logout"
        value="Logout"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>