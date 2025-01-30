<script setup lang="ts">
import { defineProps, defineSlots } from 'vue';
import PzwButton from '../pzwButton/PzwButton.vue';

defineProps<{
  activatorText?: string;
}>();

defineSlots<{
  content: void;
  activatorContent: void;
}>();
</script>

<template>
  <v-menu>
    <template #activator="{ props, isActive }">
      <PzwButton
        v-bind="{ ...$attrs, ...props }"
        variant="text"
        :append-icon="`mdi-chevron-${isActive ? 'up' : 'down'}`"
      >
        <slot name="activatorContent">
          {{ activatorText }}
        </slot>
      </PzwButton>
    </template>

    <slot name="content">
      <v-list></v-list>
    </slot>
  </v-menu>
</template>
