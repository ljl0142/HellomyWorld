import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Infinite Dimensional Cup",
  description: "A site of myself:)",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '自然哲学', link: '/markdown-examples' },
      { text: 'AI', link: '/ai' },
      { text: '杂谈', link: '/misc' },
      { text: '小游戏', link: '/games' },
      { text: '不靠谱生活指南', link: '/life'},
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md: { use: (arg0: any) => void }) => {
      md.use(mathjax3)
    }
  }
})
