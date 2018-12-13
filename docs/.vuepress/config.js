module.exports = {
    title: "Happy coding", // 所有页面标题的前缀 page title | title,导航栏标题
    description: "blog", // mete 标签
    host: '0.0.0.0', // dev服务器主机
    port: '8080', // dev服务器端口
    dest: "./docs/.vuepress/dist", // build dist 默认目录
    ga: '', // 谷歌站点分析
    serviceWorker: true, // 缓存网页内容
    evergreen: true, // 禁用 IE5 的 ES5 转码和 polyfill
    head: [ // head 标签内设置link
        ['link', { // 网页icon
            rel: 'shortcut icon',
            // href: './public/icon.ico'
        }]
    ],
    configureWebpack: { // webapck设置
        resolve: { // 路径别名
            alias: {
                '@images': '../assets/images',
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
            includeLevel: [1, 2, 3], // 需要渲染目录都标题级别
            containerClass: "table-of-contents", // 容器的div类
            listType: "ul", // ul无序,ol有序
            containerHeaderHtml: "", // 容器页头html字符串
            containerFooterHtml: "", // 容器页尾html字符串
        },
        anchor: { // 标题设置
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

        lastUpdated: '上次更新', // 最后一次git提交时间

        serviceWorker: {
            updatePopup: true, // 当网站更新时,提供refresh按钮刷新内容
            // 如果设置为 true, 默认的文本配置将是: 
            updatePopup: {
                message: "Tip:网站有内容更新",
                buttonText: "刷新"
            }
        },

        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        // repo: 'panxianqiao/panxianqiao.github.io',
        // 自定义项目仓库链接文字
        // repoLabel: 'GitHub',

        nav: [ // 顶部导航栏
            // {
            //     text: '',
            //     link: ''
            // }
        ],
        sidebar: { // 侧边栏
            '/javascript/': [],
            '/vue/': [],
            '/es6/': [],
            '/css/': [],
            '/html/': [],
            '/': [ // 需要放在最后
                '/html/',
                '/css/',
                '/javascript/',
                '/es6/',
                '/vue/',
            ],
        }
    }
}