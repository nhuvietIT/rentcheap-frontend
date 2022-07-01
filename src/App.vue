<template>
  <v-app>
    <transition >
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'; 
export default {
  name: 'App',
  computed: {
    ...mapGetters({ 
    }),
  },
  watch: {
    snackbar() {},
  },
};
</script>

<style scoped>
.v-main {
  background-color: #f4f6fa;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

* {
  font-family: 'Roboto';
}
</style>
