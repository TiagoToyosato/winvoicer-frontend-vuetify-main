<script lang="ts">
import { fetchWrapper } from "../../helpers";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

interface User {
  account_id: number;
  email: string;
  password: string;
  name: string;
}

export default {
  data() {
    return {
      users: [] as User[]
    }
  },
  mounted() {
    this.getAccounts()
  },
  methods: {
    async getAccounts() {
      const req: any = await await fetchWrapper.get(`${baseUrl}/account`);
      console.log(req)
      this.users = req;
      console.log(this.users)
    }
  }
}
</script>

<template>
  <div>
    <li
      v-for="(user) in users"
      :key="user.account_id"
    >
      {{ user.account_id }} {{ user.email }} - {{ user.password }} - {{ user.name }}
    </li>
  </div>
</template>
