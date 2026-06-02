<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">
      Products
    </h1>

    <button
      @click="showForm = !showForm"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add Product
    </button>

    <form
      v-if="showForm"
      @submit.prevent="addProduct"
      class="mt-4 space-y-3"
    >
      <input
        v-model="form.name"
        placeholder="Name"
        class="border p-2 w-full"
      />

      <input
        v-model="form.price"
        placeholder="Price"
        type="number"
        class="border p-2 w-full"
      />

      <input
        v-model="form.stock"
        placeholder="Stock"
        type="number"
        class="border p-2 w-full"
      />

      <textarea
        v-model="form.description"
        placeholder="Description"
        class="border p-2 w-full"
      />

      <button
        class="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>

    <table class="w-full mt-8 border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
        >
          <td>{{ product.name }}</td>
          <td>${{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.description }}</td>
            <td>
                <button class="bg-yellow-500 text-white px-2 py-1 rounded">
                Edit
                </button>
    
                <button class="bg-red-500 text-white px-2 py-1 rounded">
                Delete
                </button>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getProducts,
  createProduct,
} from "../../services/productService";

const products = ref([]);
const showForm = ref(false);

const form = ref({
  name: "",
  price: "",
  stock: "",
  description: "",
});

const loadProducts = async () => {
  const res = await getProducts();
  products.value = res.data;
};

const addProduct = async () => {
  await createProduct(form.value);

  form.value = {
    name: "",
    price: "",
    stock: "",
    description: "",
  };

  loadProducts();
};

onMounted(loadProducts);
</script>

<style scoped></style>