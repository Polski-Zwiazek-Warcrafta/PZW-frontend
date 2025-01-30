<script setup lang="ts">
import { t } from '@/plugins/i18n';
import TopBar from './components/topBar/TopBar.vue';
</script>
<template>
  <v-app>
    <TopBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
