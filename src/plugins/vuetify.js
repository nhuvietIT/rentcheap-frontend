import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
Vue.use(Vuetify, {
  icons: {
    iconfont: ['fa', 'mdi'],
  },
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // pp: plan poker
        ppblue: '#3597e2',
        ppred: '#eb907d',
        ppviolet: '#7854c0',
      },
    },
  },
});
