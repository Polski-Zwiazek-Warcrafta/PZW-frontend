<script setup lang="ts">
import PzwButton from '@/components/common/pzwButton/PzwButton.vue';
import { t } from '@/plugins/i18n';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');
const rememberMe = ref(false);

const redirectToHomePage = () => {
  router.push('/');
};
</script>

<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="mx-auto py-5" rounded="xl" width="400" color="overlay">
      <v-card-title class="text-center">{{
        t('loginPage.title')
      }}</v-card-title>
      <v-card-text class="mt-2">
        <v-form>
          <v-text-field
            v-model="username"
            :label="t('loginPage.username')"
            prepend-icon="mdi-account"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="password"
            :label="t('loginPage.password')"
            prepend-icon="mdi-lock"
            type="password"
            outlined
            dense
          ></v-text-field>

          <v-checkbox
            v-model="rememberMe"
            color="primary"
            dense
            theme="light"
            :label="t('loginPage.rememberMe')"
          >
          </v-checkbox>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <PzwButton block color="primary" variant="flat">
          {{ t('loginPage.submit') }}
        </PzwButton>
      </v-card-actions>

      <v-card-actions>
        <PzwButton block variant="text" @click="redirectToHomePage">
          {{ t('loginPage.guest') }}
        </PzwButton>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
