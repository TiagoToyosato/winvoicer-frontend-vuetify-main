<script lang="ts">
import { useAuthStore } from "../../stores";

export default {
  data: () => ({ loading: false, active: false, username: "", password: "" }),
  methods: {
    async load () {
      this.loading = true
      this.active = true;
      setTimeout(() => (this.loading = false, this.active = false), 3000)
      const authStore = useAuthStore();
      await authStore.login(this.username, this.password);
    }
  },
}
</script>

<template>
  <div>
    <v-card
      class="loginCard"
      variant="outlined"
    >
      <img
        height="150"
        src="../../assets/login_image.png"
      >
      <v-card-item>
        <div>
          <div>
            <form>
              <div>
                <label>email: </label>
                <input
                  v-model="username"
                  type="text"
                  name="username"
                >
              </div>
              {{ username }}
              <div>
                <br>
                <label>password: </label>
                <input
                  id=""
                  v-model="password"
                  type="password"
                  name="password"
                >
              </div>
              {{ password }}
            </form>
          </div>
        </div>

        <div id="loginButtons">
          <div class="buttonWidth">
            <v-btn
              class="buttons"
              :style="{
                background: active ? 'greenyellow' : 'lightgreen',
              }"
              :loading="loading"
              size="x-large"
              density="comfortable"
              variant="elevated"
              elevation="16"
              @click="load"
            >
              Login
            </v-btn>
          </div>
          <div class="buttonWidth">
            <v-btn
              class="buttons"
              :style="{
                background: 'orange',
              }"
              size="x-large"
              density="comfortable"
              variant="elevated"
              elevation="16"
            >
              Voltar
            </v-btn>
          </div>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>

  <style scoped>
    .loginCard {
      width: 100%;
      margin-top: 30px;
      /* height: 52vh; */
    }

    input {
      border: 1px black solid;
    }

    #loginButtons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }

    .buttonWidth {
      width: 45%;
    }

    .buttons {
      width: 100%;
    }
  </style>