import DefaultTheme from 'vitepress/theme'
import PasswordBox from './PasswordBox.vue'
import Comments from './rainbowcloudboard/comment.vue'
import type { App } from 'vue'
import { h } from 'vue'
import { useData } from 'vitepress'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }: { app: App }) {
      app.component('PasswordBox', PasswordBox)
    },

    Layout() {
      const { frontmatter } = useData()

      return h(DefaultTheme.Layout, null, {
        'doc-after': () => {
          if (frontmatter.value.comments === false) {
            return null
          }
          return h(Comments)
        }
      })
    }
    }