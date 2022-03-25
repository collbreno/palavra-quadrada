import { createApp, ref } from 'vue'
import App from './App.vue'
import './assets/global.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { ColorBlindDataKey } from './utils/Symbols'
import ColorBlindData from './types/ColorBlindData'

const app = createApp(App);

app.use(Quasar, quasarUserOptions);
app.provide(ColorBlindDataKey, ref<ColorBlindData>(new ColorBlindData()));
app.mount('#app');
