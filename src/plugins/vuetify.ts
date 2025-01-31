import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#b8860b', // lewy sidebar
          secondary: '#cdaa7d', // Light brown
          error: '#ff4500', // error (czerwony)
          warning: '#ffcc00', // komunikaty ostrzegawcze (żółty)
          info: '#7f9c6a', // komunikaty informacyjne (niebieski)
          success: '#4e8c4a', // komunikaty sukcesu
          overlay: '#eee7cb', // tlo dla dialogów np login
          background: '#f5f5dc', // tło
        },
      },
      dark: {
        colors: {
          primary: '#8b4513',
          secondary: '#a0522d',
          error: '#ff6347',
          warning: '#ff8c00',
          info: '#556b2f',
          success: '#228b22',
          overlay: '#3e2a12',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      sortAsc: 'mdi-chevron-up',
      sortDesc: 'mdi-chevron-down',
    },
    sets: {
      mdi,
    },
  },
});

export default vuetify;
