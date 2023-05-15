<script lang="ts">
import ListAccounts from "../../components/accounts/ListAccounts.vue";
import AccountsActions from "../../components/accounts/AccountsActions.vue";

export default ({
  name: "AccountsView",
  components: { ListAccounts, AccountsActions },
  data() {
    return {
      message: "Login"
    };
  }
})
</script>

<template>
  <div class="accounts">
    <h1>Users</h1>
    <ListAccounts />
    <AccountsActions />
  </div>
</template>

<style scoped>
  .accounts {
    padding: 2em;
   }
</style>