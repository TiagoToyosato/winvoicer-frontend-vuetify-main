import { defineStore } from "pinia";
import { fetchWrapper } from "../..//helpers";
import { useAuthStore } from "../stores";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

interface UsersStoreState {
  users: Record<string, User> | { loading: boolean } | { error: any };
  user: User | { loading: boolean } | { error: any };
}

export const useUsersStore = defineStore({
  id: "users",
  state: (): UsersStoreState => ({
    users: {},
    user: { loading: false, error: "" },
  }),
  actions: {
    async getById(id: number) {
      this.user = { loading: true };

      try {
        const response: any = await fetchWrapper.get(`${baseUrl}/${id}`);
        if (response.error) {
          this.user = { error: response.error };
        } else {
          this.user = response.data;
        }
      } catch (error) {
        this.user = { error };
      }
    },
    async getAll() {
      this.user = { loading: true };
      try {
        const response: any = await fetchWrapper.get(`${baseUrl}`);
        if (response.error) {
          this.user = { error: response.error };
        } else {
          this.user = response.data;
        }
      } catch (error) {
        this.user = { error };
      }
    }
  },
});
