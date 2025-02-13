<script setup lang="ts">
import { ref, computed } from 'vue';
import PzwButton from '../common/pzwButton/PzwButton.vue';
import { t } from '@/plugins/i18n';
import RegisterPage from '@/pages/entry/registerPage.vue';
import LoginPage from '@/pages/entry/loginPage.vue';

const isDrawerOpen = ref(true);
const isHoveringDrawer = ref(false);

const registerDialogModel = ref(false);
const loginDialogModel = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const onMouseEnter = () => (isHoveringDrawer.value = true);
const onMouseLeave = () => (isHoveringDrawer.value = false);

const navItems = computed(() => [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Profile', icon: 'mdi-account', to: '/profile' },
]);

const entryNavItems = computed(() => [
  {
    title: t('navBar.login'),
    icon: 'mdi-login',
    asyncAction: () => {
      loginDialogModel.value = true;
    },
  },
  {
    title: t('navBar.register'),
    icon: 'mdi-account-plus',
    asyncAction: () => {
      registerDialogModel.value = true;
    },
  },
]);
</script>

<template>
  <v-navigation-drawer
    app
    :expand-on-hover="isHoveringDrawer"
    permanent
    :rail="!isDrawerOpen"
    color="primary"
    @mouseover="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <v-list class="mt-10">
      <v-list-item v-for="(item, index) in navItems" :key="index" :to="item.to">
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <template #append>
      <v-list class="mb-5">
        <v-list-item
          v-for="(item, index) in entryNavItems"
          :key="index"
          @click="item.asyncAction"
        >
          <template #prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
    <PzwButton
      class="toggle-button"
      :icon="isDrawerOpen ? 'mdi-chevron-left' : 'mdi-chevron-right'"
      @click="toggleDrawer"
      size="x-small"
      rounded="full"
      @mouseover.stop
    />
    <RegisterPage v-model="registerDialogModel" />
    <LoginPage v-model="loginDialogModel" />
  </v-navigation-drawer>
</template>

<style scoped>
.toggle-button {
  position: absolute;
  top: 10px;
  right: -16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  background-color: white;
  color: rgb(var(--v-theme-primary));
}
</style>
