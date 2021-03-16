module.exports = {
    title: 'CompLib',
    base: '/comp-lib/',
    description: 'another lightweight ui toolkit for Vue.js 2.X',
    port: 8083, 
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },
        { text: '组件', link: '/guide/' },
        { text: '主题', link: '' },
      ],
      sidebar: {
        '/guide/': [
          {
            title: '开发指南',
            collapsable: false,
            sidebarDepth:1,
            children: [
              'start'
            ]
          },
          {
            title: '基础组件',
            sidebarDepth:1,
            collapsable: false,
            children: [
              'component/ease-text'
            ]
          },
        ]
      }
    }
  }
