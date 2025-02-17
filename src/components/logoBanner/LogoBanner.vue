<script setup lang="ts">
import logo from '@/assets/logo.png';
</script>

<template>
  <div
    class="w-full d-flex align-center flex-column justify-center text-center"
  >
    <h1 class="mb-2">Polski Związek Warcrafta</h1>
    <v-img :src="logo" width="100" height="100" />
  </div>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
}
</style>
