<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-4">
        <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
          <ul>
            <li v-for="(error, index) in errors" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>

        <form @submit.prevent="register">
          <div class="mb-3">
            <label htmlFor="name" class="form-label">Name</label>
            <input
              type="text"
              v-model="fromData.name"
              class="form-control"
              id="name"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="email" class="form-label">Email address</label>
            <input
              type="text"
              v-model="fromData.email"
              class="form-control"
              id="email"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="password" class="form-label">Password</label>
            <input
              v-model="fromData.password"
              type="password"
              class="form-control"
              id="password"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="c_password" class="form-label"
              >Confirm Password</label
            >
            <input
              v-model="fromData.c_password"
              type="password"
              class="form-control"
              id="c_password"
            />
          </div>
          <button class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const errors = ref([]);
const fromData = reactive({
  name: "",
  email: "",
  password: "",
  c_password: "",
});

async function register() {
  try {
    const user = await $fetch("/api/auth/register", {
      method: "post",
      body: fromData,
    });
    console.log(user);
  } catch (error) {
    errors.value = Object.values(error.data.data).flat();
  }
}
</script>
