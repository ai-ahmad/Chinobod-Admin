<template>
    <div class="flex items-center justify-center min-h-screen bg-admin-dash bg-cover object-cover">
      <div class="bg-green-900 p-8 rounded-lg shadow-md text-white max-w-md w-full">
        <h2 class="text-center text-lg mb-4">LOGIN VA PAROLINGIZNI KIRITING:</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <input v-model="login" type="text" placeholder="LOGIN" class="w-full p-3 rounded bg-white text-black placeholder-gray-500">
          </div>
          <div class="mb-4">
            <input v-model="password" type="password" placeholder="PAROL" class="w-full p-3 rounded bg-white text-black placeholder-gray-500">
          </div>
          <button type="submit" class="w-full py-3 bg-green-500 rounded hover:bg-green-600 transition duration-300">TASDIQLASH</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        login: '',
        password: ''
      }
    },
    methods: {
      submitForm() {
        console.log('Login:', this.login);
        console.log('Password:', this.password);
      }
    }
  }
  </script>
  
  <style>
  /* Custom styles if necessary */
  </style>
  