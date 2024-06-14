<template>
  <div>
    <router-view v-if="!isSignInRoute" /> 
    <SignIn v-if="isSignInRoute" />   
  </div>
</template>


<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SignIn from "./components/SignIn/SignIn.vue";

export default {
  components: {
    SignIn,
  },
  setup() {
    const route = useRoute();

    const isSignInRoute = computed(() => route.name === 'SignIn');

    return {
      isSignInRoute
    };
  }
};
</script>

<style>
/* Any additional styles */
</style>
