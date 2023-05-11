<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "AboutView",
  data() {
    return {
      message: "About Us",
      description: "We are a team of passionate developers who love to build great software!"
    }
  }
})
</script>

  <style scoped>
  .about {
    padding: 2em;
  }
  </style>
