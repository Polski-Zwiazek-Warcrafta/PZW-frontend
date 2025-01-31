<script setup lang="ts">
import PzwButton from '@/components/common/pzwButton/PzwButton.vue';
import { t } from '@/plugins/i18n';
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const repeatPassword = ref('');
</script>

<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="mx-auto py-5" rounded="xl" width="400" color="overlay">
      <v-card-title class="text-center">{{
        t('registerPage.title')
      }}</v-card-title>
      <v-card-text class="mt-2">
        <v-form>
          <v-text-field
            v-model="username"
            :label="t('registerPage.username')"
            prepend-icon="mdi-account"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="password"
            :label="t('registerPage.password')"
            prepend-icon="mdi-lock"
            type="password"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="repeatPassword"
            :label="t('registerPage.repeatPassword')"
            prepend-icon="mdi-lock"
            type="password"
            outlined
            dense
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <PzwButton block color="primary" variant="flat">
          {{ t('registerPage.submit') }}
        </PzwButton>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
