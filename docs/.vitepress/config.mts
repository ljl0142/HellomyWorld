import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Infinite Dimensional Cup",
  description: "A site of myself:)",
  lastUpdated: true,
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
        text: '更新日志',
        items: [
          { text: '内容1', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ljl0142/HellomyWorld' }
    ],

    lastUpdated: {
      text: '最后更新于'
    }
  },
  markdown: {
    config: (md: { use: (arg0: any) => void }) => {
      md.use(mathjax3)
    }
  }
})
