module.exports = {
    title: "Happy coding",
    description: "javascript",
    themeConfig: {
        displayAllHeaders: true,
        lastUpdated: 'Last Updated', // string | boolean
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
        },
        nav: [{
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
        sidebar: {
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
                '/foo/'
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