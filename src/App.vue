<template>
  <div>
    <router-view v-if="!isSignInRoute" />
    <SignIn v-if="isSignInRoute" />
    <Navigator />
  </div>
</template>


<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SignIn from "./components/SignIn/SignIn.vue";
import Navigator from "./components/Navigation/Navigation.vue"

export default {
  components: {
    SignIn,
    Loading,
    Navigator

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
