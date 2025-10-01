import './assets/highlight.css';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

// Import core Highlight.js and specific languages
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml'; // for HTML/Vue templates

// Import a highlight.js theme
import 'highlight.js/styles/night-owl.css';

// Add a custom language definition for Vue files
hljs.registerAliases('vue', { languageName: 'xml' });

// Register the languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('json', json);

// Import the custom highlight directive
// import { highlightDirective } from './directives/highlight';

// Create a global plugin for highlight.js
const highlightPlugin = {
    install(app: any) {
        // Register the global hljs instance
        app.config.globalProperties.$hljs = hljs;
        app.provide('hljs', hljs);

        // Register the custom directive
        // app.directive('highlight', highlightDirective);
    }
};

createApp(App)
    .use(router)
    .use(vuetify)
    .use(highlightPlugin)
    .mount('#app')
