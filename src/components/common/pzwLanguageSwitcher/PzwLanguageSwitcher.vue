<script setup lang="ts">
import { VImg } from 'vuetify/components';

import pl from '@/assets/pl.png';
import en from '@/assets/en.png';
import kr from '@/assets/kr.png';

import { Language } from '@/types/i18n.model';
import { getLanguage, saveLanguage } from '@/utils/language.utils';
import i18n from '@/plugins/i18n';
import { computed, ref } from 'vue';
import PzwDropdownMenu from '../pzwDropdownMenu.vue/PzwDropdownMenu.vue';

const activeLanguage = ref<Language>(getLanguage());

const setNewLanguage = (language: Language): void => {
  saveLanguage(language);
  i18n.global.locale = language;
  activeLanguage.value = language;
};

const items = computed(() => [
  {
    text: 'Polski',
    icon: pl,
    onClick: () => setNewLanguage(Language.PL),
    code: Language.PL,
  },
  {
    text: 'English',
    icon: en,
    onClick: () => setNewLanguage(Language.EN),
    code: Language.EN,
  },
  {
    text: '한국어',
    icon: kr,
    onClick: () => setNewLanguage(Language.KR),
    code: Language.KR,
  },
]);
</script>
<template>
  <PzwDropdownMenu>
    <template #activatorContent>
      <div class="d-flex align-center ga-2">
        <VImg
          :src="items.find((item) => item.code === activeLanguage)?.icon"
          width="30"
          height="20"
        />
        <span>{{ activeLanguage }}</span>
      </div>
    </template>
    <template #content>
      <v-list activatable bgColor="overlay">
        <v-list-item
          v-for="item in items"
          :key="item.text"
          @click="item.onClick"
        >
          <div class="w-100">
            <v-row>
              <v-col cols="5">
                <VImg :src="item.icon" width="30px" height="20px" />
              </v-col>
              <v-col cols="7" class="ps-0">
                <span>{{ item.text }}</span>
              </v-col>
            </v-row>
          </div>
        </v-list-item>
      </v-list>
    </template>
  </PzwDropdownMenu>
</template>
