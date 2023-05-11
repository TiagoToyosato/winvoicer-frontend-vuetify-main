<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title>My Site</v-toolbar-title>

    <v-spacer />

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.path"
          link
        >
          <router-link
            :to="link.path"
            class="nav-link"
            @click="closeDrawer"
          >
            {{ link.name }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer"
      app
      permanent
      :clipped="isDesktop"
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.path"
          link
        >
          <router-link
            :to="link.path"
            class="nav-link"
            @click="closeDrawer"
          >
            {{ link.name }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-btn
      icon
      @click="toggleTheme"
    >
      <v-icon>{{ isDarkTheme ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useDisplay } from "vuetify/lib/framework.mjs"

interface Link {
  name: string
  path: string
}

export default defineComponent({
  name: "HeaderComponent",

  setup() {
  //  const route = useRoute()

    const drawer = ref(false)
    const links: Link[] = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Login", path: "/login" },
      // { name: "Contacts", path: "/contacts" },
      // { name: "Services", path: "/services" },
    ]

    const closeDrawer = () => {
      drawer.value = false
    }

    const toggleTheme = () => {
      // Your theme toggling logic here
    }

    const isDarkTheme = computed(() => {
      // Your dark theme detection logic here
      return false
    })

    const isDesktop = computed(() => {
      //return true
      return useDisplay().smAndUp.value
      //return smAndUp.value
    })

    return {
      drawer,
      links,
      closeDrawer,
      toggleTheme,
      isDarkTheme,
      isDesktop,
    }
  },
})
</script>
