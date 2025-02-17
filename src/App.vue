<script setup lang="ts">
import { t } from '@/plugins/i18n';
import TopBar from './components/topBar/TopBar.vue';
import NavigationBar from './components/navigationBar/NavigationBar.vue';
import LogoBanner from './components/logoBanner/LogoBanner.vue';
</script>
<template>
  <v-app>
    <NavigationBar />
    <TopBar />
    <v-main>
      <LogoBanner />
      <router-view />
    </v-main>
  </v-app>
</template>
