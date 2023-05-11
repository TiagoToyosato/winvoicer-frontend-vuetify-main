<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      message: "Welcome to my website!"
    }
  }
})
</script>

  <style scoped>
  .home {
    padding: 2em;
  }
  </style>
