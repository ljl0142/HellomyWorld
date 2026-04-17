import DefaultTheme from 'vitepress/theme'
import PasswordBox from './PasswordBox.vue'
import type { App } from 'vue'

export default {
      extends: DefaultTheme,
      enhanceApp({ app }: { app: App }) {
        app.component('PasswordBox', PasswordBox)
      }
    }