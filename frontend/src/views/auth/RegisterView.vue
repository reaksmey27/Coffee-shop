<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-96 p-6 shadow rounded bg-white">
      <h1 class="text-2xl font-bold mb-4">
        Register
      </h1>

      <input
        v-model="name"
        placeholder="Name"
        class="border p-2 w-full mb-3"
      />

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
        @click="handleRegister"
        class="bg-green-500 text-white w-full py-2 rounded"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { register } from "../../services/authService";

const name = ref("");
const email = ref("");
const password = ref("");

const handleRegister = async () => {
  await register({
    name: name.value,
    email: email.value,
    password: password.value,
    role: "cashier",
  });

  alert("Register Success");
};
</script>