<script lang="ts">
import { fetchWrapper } from "../../../helpers";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.getAccounts()
  },
  methods: {
    async getAccounts() {
      const req: any = await await fetchWrapper.get(`${baseUrl}/account`);
      console.log(req)
      const data = await req.json();
      console.log(data)
      this.users = data;
      console.log(this.users)
    }
  }
}
</script>

<template>
  <div class="accounts">
    <h1>Users</h1>
  </div>
</template>

<style scoped>
  .accounts {
    padding: 2em;
  }
</style>
