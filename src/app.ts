import { createApp } from 'vue';
import App from './App.vue';
import './style/main.css';
// import OpenAI from './services/OpenAI';

// const openAI = new OpenAI();
// await openAI.getResponse('Tell me a joke');
// await openAI.getResponse('Do you remember something about the last response you gave me?');

// Material components
import '@material/web/menu/menu.js';

const app = createApp(App);

app.mount('#app');
