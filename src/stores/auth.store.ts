import { defineStore } from "pinia";
import { fetchWrapper } from "../helpers";
import { router } from "../router";
import { useAlertStore } from "../stores";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

interface AuthState {
  user: string | null;
  returnUrl: string | null;
}

export const useAuthStore = defineStore({
  id: "auth",
  state: (): AuthState => ({
    user: localStorage.getItem("user_token"),
    returnUrl: null,
  }),
  actions: {
    async login(username: string, password: string): Promise<void> {
      try {
        const user: any = await fetchWrapper.post(`${baseUrl}/generate_token`, { email: username, password });

        // update pinia state
        this.user = user;
        console.log(this.user)
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem("user_token", user);

        // redirect to previous url or default to home page
        router.push("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const alertStore = useAlertStore();
        alertStore.error(error);
      }
    },
    logout(): void {
      this.user = null;
      localStorage.removeItem("user_token");
      router.push("/account/login");
    }
    // async getAccounts(): Promise<void> {
    //   try {
    //     const user = await fetchWrapper.get(`${baseUrl}/account`);
    //   } catch (error) {
    //     const alertStore = useAlertStore();
    //     alertStore.error(error)
    //   }
    // }
  },
});