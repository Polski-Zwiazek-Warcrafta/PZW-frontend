<script setup lang="ts">
import PzwLanguageSwitcher from '../common/pzwLanguageSwitcher/PzwLanguageSwitcher.vue';
import PzwThemeSwitcher from '../common/pzwThemeSwitcher/PzwThemeSwitcher.vue';
</script>
<template>
  <v-app-bar app flat color="transparent">
    <v-spacer />
    <div class="d-flex align-center ga-5 pe-5">
      <PzwLanguageSwitcher />
      <PzwThemeSwitcher />
    </div>
  </v-app-bar>
</template>
