<script lang="ts">
export default {
  data() {
    return {
      actions: [{ title: "Registrar", route: "/register_user" }, { title: "Editar", route: "/edit_user" }, { title: "Apagar", route: "/delete_user" }]
    }
  }
}
</script>

<template>
  <div id="accountActions">
    <v-btn
      v-for="action in actions"
      :key="action.title"
      class="userActions"
      :to="action.route"
    >
      {{ action.title }}
    </v-btn>
  </div>
</template>

<style scoped>
#accountActions {
    margin-top: 10px;
}

.userActions {
    margin-left: 15px;
}
</style>