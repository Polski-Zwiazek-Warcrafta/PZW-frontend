<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue';
import { useRoute } from 'vue-router';
import { PzwButtonProps } from './PzwButton.model';

const props = withDefaults(defineProps<PzwButtonProps>(), {
  rounded: 'lg',
});

const route = useRoute();

const getToPath = (to: PzwButtonProps['to']): string => {
  if (typeof to === 'string') {
    return to;
  }
  if (to && typeof to === 'object' && to.path) {
    return to.path;
  }

  return '';
};

const isActive = computed(() => {
  const toPath = getToPath(props.to);
  if (!toPath) return false;

  if (toPath === '/') {
    return route.path === '/';
  }

  return route.path.startsWith(toPath);
});

const buttonClasses = computed(() => ({
  'button-component': true,
  'active-route': isActive.value,
}));
</script>

<template>
  <v-btn :class="buttonClasses" v-bind="props">
    <template v-if="$slots['default']" #default>
      <slot />
    </template>
    <template v-if="$slots['append']" #append>
      <slot name="append" />
    </template>
    <template v-if="$slots['prepend']" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots['loader']" #loader>
      <slot name="loader" />
    </template>
  </v-btn>
</template>

<style scoped lang="scss">
.button-component {
  text-transform: none;
}

.active-route {
  font-weight: bold;
}
</style>
