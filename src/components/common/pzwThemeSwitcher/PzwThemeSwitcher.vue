<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const isDark = ref(theme.global.current.value.dark);

function toggleTheme() {
  isDark.value = !isDark.value;
  theme.global.name.value = isDark.value ? 'dark' : 'light';
}
</script>

<template>
  <v-switch
    v-model="isDark"
    inset
    @click="toggleTheme"
    true-icon="mdi-moon-waning-crescent"
    false-icon="mdi-white-balance-sunny"
    hide-details
  >
  </v-switch>
</template>
