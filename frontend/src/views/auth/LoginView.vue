<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-96 p-6 shadow rounded bg-white">
      <h1 class="text-2xl font-bold mb-4">
        Login
      </h1>

      <input
        v-model="email"
        placeholder="Email"
        class="border p-2 w-full mb-3"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 w-full mb-3"
      />

      <button
        @click="handleLogin"
        class="bg-blue-500 text-white w-full py-2 rounded"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  await authStore.login({
    email: email.value,
    password: password.value,
  });

  alert("Login Success");
};
</script>

<style scoped></style>