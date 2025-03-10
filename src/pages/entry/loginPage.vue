<script setup lang="ts">
import PzwButton from '@/components/common/pzwButton/PzwButton.vue';
import { t } from '@/plugins/i18n';
import { loginUser } from '@/services/auth.service';
import { AuthResponse } from '@/types/auth.model';
import {
  saveUserInfoToLocalStorage,
  saveUserInfoToSessionStorage,
} from '@/utils/auth.utils';
import { ref, computed } from 'vue';

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(['update:modelValue', 'close', 'cancel']);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const doClose = () => {
  emit('cancel');
  emit('close');
  model.value = false;
};

const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');

const login = async () => {
  isLoading.value = true;
  const data = {
    username: username.value,
    password: password.value,
  };

  const response: AuthResponse = await loginUser(data);

  if (response.error) {
    errorMessage.value = t(response.error);
    isLoading.value = false;
    return;
  }

  if (response.success) {
    if (rememberMe.value) {
      saveUserInfoToLocalStorage(response.access_token, response.isAdmin);
    } else {
      saveUserInfoToSessionStorage(response.access_token, response.isAdmin);
    }

    isLoading.value = false;
    model.value = false;
  }
};
</script>

<template>
  <v-dialog v-model="model" persistent width="400">
    <v-container class="fill-height d-flex align-center justify-center">
      <v-card
        class="w-100 mx-auto py-5"
        rounded="xl"
        width="400"
        color="overlay"
      >
        <PzwButton
          icon="mdi-close"
          size="x-small"
          @click="doClose()"
          variant="text"
          class="close-button"
        />
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
            ></v-checkbox>

            <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <PzwButton
            block
            color="primary"
            variant="flat"
            @click="login"
            :loading="isLoading"
          >
            {{ t('loginPage.submit') }}
          </PzwButton>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-dialog>
</template>

<style>
.error-text {
  color: rgb(var(--v-theme-error));
  text-align: center;
}

.close-button {
  position: absolute !important;
  top: 0;
  right: 0;
  margin: 10px;
}
</style>
