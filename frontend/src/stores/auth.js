import { defineStore } from "pinia";
import { login } from "../services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
  }),

  actions: {
    async login(credentials) {
      const response = await login(credentials);

      this.user = response.data.user;
      this.token = response.data.token;

      localStorage.setItem(
        "token",
        response.data.token
      );
    },

    logout() {
      this.user = null;
      this.token = null;

      localStorage.removeItem("token");
    },
  },
});