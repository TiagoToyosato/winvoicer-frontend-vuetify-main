<script lang="ts">
import LoginCard from "../../components/accounts/LoginCard.vue";

export default ({
  name: "LoginView",
  components: { LoginCard },
  data() {
    return {
      message: "Login"
    };
  }
})
</script>

<template>
  <div class="login">
    <h1>{{ message }}</h1>
    <LoginCard />
  </div>
</template>

  <style scoped>
  .login {
    padding: 2em;
    width: 500px;
    margin-top: 10px;
   }
   </style>