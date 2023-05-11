import { defineStore } from "pinia";

interface AlertState {
  alert: { message: string; type: string } | null;
}

export const useAlertStore = defineStore({
  id: "alert",
  state: (): AlertState => ({
    alert: null,
  }),
  actions: {
    success(message: string): void {
      this.alert = { message, type: "alert-success" };
    },
    error(message: string): void {
      this.alert = { message, type: "alert-danger" };
    },
    clear(): void {
      this.alert = null;
    },
  },
});