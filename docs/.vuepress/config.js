module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '夜阑星空群服务器帮助文档',
      description: '夜阑星空群服务器帮助文档'
    }
    
  },
  base:'/',
  themeConfig : {
    repo: 'luluxiaoyu/ylxkserver-help-new',
    repoLabel: '查看源码',
    editLinks: true,
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新时间：',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},


        nav : [
          { text: '夜阑星空-Minecraft', link: 'https://www.nstar.xyz' },
          { text: '服务器验证站', link: 'https://auth.nstar.xyz' }
      ],
        sidebarDepth : 2,
        sidebar: [
          {
            title: '简介',   // 必要的
            path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/',
              'show1',
              'show2'
            ]
          },
          {
            title: '群服务器进入',   // 必要的
            path: '/part1/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/part1/',
              '/part1/1',
              '/part1/2',
              '/part1/3',
              '/part1/4',
              '/part1/5',
              '/part1/6',
            ]
          } ,
          {
            title: '生存1服',   // 必要的
            path: '/part2/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/part2/',
              '/part2/1'
            ]
          },
          {
            title: '生存2服',   // 必要的
            path: '/part3/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/part3/',
              '/part3/1',
              '/part3/2',
              '/part3/3',
              '/part3/4',
              '/part3/5'
            ]
          },
          {
            title: '科技生存服',   // 必要的
            path: '/part6/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/part6/',
              '/part6/1',
              '/part6/2'
            ]
          },
          {
            title: '其他',   // 必要的
            path: '/part4/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/part4/',
              '/part4/1',
              '/part4/2',
              '/part4/3',
              '/part4/4',
              '/part4/5',
              '/part4/6',
              '/part4/7'
            ]
          },
          {
            title: '赞助',   // 必要的
            path: '/part5/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/part5/'
            ]
          }
        ]
      }
  }
}
}
