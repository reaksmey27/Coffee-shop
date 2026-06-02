<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">
      Categories
    </h1>

    <form
      @submit.prevent="addCategory"
      class="flex gap-2 mb-4"
    >
      <input
        v-model="name"
        placeholder="Category name"
        class="border p-2 flex-1"
      />

      <button
        class="bg-blue-500 text-white px-4"
      >
        Add
      </button>
    </form>

    <table class="w-full border">
      <thead>
        <tr>
          <th class="border p-2">ID</th>
          <th class="border p-2">Name</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="category in categories"
          :key="category.id"
        >
          <td class="border p-2">
            {{ category.id }}
          </td>

          <td class="border p-2">
            {{ category.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import {
  getCategories,
  createCategory,
} from "../../services/categoryService";

const categories = ref([]);

const name = ref("");

const loadCategories = async () => {
  const res = await getCategories();
  categories.value = res.data;
};

const addCategory = async () => {
  await createCategory({
    name: name.value,
  });

  name.value = "";

  loadCategories();
};

onMounted(loadCategories);
</script>