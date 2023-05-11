<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue"
import SidebarDashboard from "./components/accounts/SidebarDashboard.vue";

import { useAuthStore } from "./stores";

const { user } = useAuthStore();

let logged = false
if (user != null) {
  logged = true
}
</script>

<template>
  <v-app>
    <HeaderComponent />
    <SidebarDashboard v-if="logged" />
    <div id="wrapper">
      <router-view />
    </div>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#wrapper {
  width: 100%;
}
</style>
