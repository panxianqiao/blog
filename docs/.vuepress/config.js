module.exports = {
    title: "Happy coding", // 所有页面标题的前缀 page title | title,导航栏标题
    description: "javascript", // mete 标签
    host: '0.0.0.0', // dev服务器主机
    port: '8080', // dev服务器端口
    dest: "./docs/.vuepress/dist", // build dist 默认目录
    ga: '', // 谷歌站点分析
    serviceWorker: true, // 缓存网页内容
    evergreen: true, // 禁用 IE5 的 ES5 转码和 polyfill
    head: [ // head 标签内设置link
        ['link', { // 网页icon
            rel: 'shortcut icon',
            href: './public/icon.ico'
        }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir',
                '@alias': '../../docs/assets/images/to/some/dir',
                // 'images': path.resolve(__dirname, '../../docs/assets/images')
                // '@alias': '../../docs/.vuepress/public'
            }
        }
    },
    markdown: {
        lineNumbers: false, // 代码块是否显示行号
        externalLinks: { // 外部链接属性
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        toc: { // 目录
            includeLevel: [2, 3], // 需要渲染目录都标题级别
            containerClass: "table-of-contents", // 容器的div类
            listType: "ol", // ul无序,ol有序
            containerHeaderHtml: "header", // 容器页头html字符串
            containerFooterHtml: "footer", // 容器页尾html字符串
        },
        anchor: { // 锚点设置
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#'
        },
        config: md => { // 使用更多 markdown-it 插件
            // md.use(require('markdown-it-xxx'))
        }
    },
    theme: "", // 自定义主题
    themeConfig: { // 主题配置
        displayAllHeaders: true, // 显示所有页面标题链接
        lastUpdated: 'Last Updated', // 最后一次git提交时间
        serviceWorker: {
            updatePopup: true // 当网站更新时,提供refresh按钮刷新内容
            // 如果设置为 true, 默认的文本配置将是: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
        },
        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        repo: 'vuejs/vuepress',
        // 自定义项目仓库链接文字
        // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
        repoLabel: '贡献代码！',

        // 以下为可选的 "Edit this page" 链接选项

        // 如果你的文档和项目位于不同仓库：
        docsRepo: 'vuejs/vuepress',
        // 如果你的文档不在仓库的根目录下：
        docsDir: 'docs',
        // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
        docsBranch: 'master',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助我们改进页面内容！',
        nav: [{ // 导航栏
            text: 'Languages',
            items: [{
                    text: 'Group1',
                    items: [{
                            text: 'Chinese',
                            link: '/language/chinese'
                        },
                        {
                            text: 'Japanese',
                            link: '/language/japanese'
                        }
                    ]
                },
                {
                    text: 'Group2',
                    items: [{
                        text: 'English',
                        link: '/language/chinese'
                    }]
                }
            ]
        }],
        sidebar: { // 侧边栏
            '/foo/': [
                '',
                'one',
                'two'
            ],
            '/bar/': [
                '',
                'three',
                'four'
            ],
            '/': [
                '',
                'html',
                'java',
                '/foo/',
                '/bar/'
            ]
        }
        // sidebar: 'auto' 
        // sidebar: [ // 侧边栏
        //     {
        //         title: 'html',
        //         collapsable: false,
        //         children: [
        //             ['/html','html']
        //         ]
        //     },
        //     {
        //         title: 'java',
        //         children: [
        //             ['/java','java']
        //         ]
        //     },
        // ]
    }
}