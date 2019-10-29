
module.exports = {
  base: '/fluent_help_translation/',
  title: 'Hello Fluent_Help_Translation', 
  description: '基于ANSYS19.2的Fluent帮助文档翻译工程',
  ga: '',
	serviceWorker: true,
	evergreen: true,
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/xls12345/fluent_help_translation',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    editLinks: true,
    docsDir: 'docs',
    nav: [
          {
            text: '中文文档',
            link: '/doc_zh/',
          },
           {
            text: 'English Doc',
            link: '/doc_en/',
          },
          {
            text: '联系我',
            link: '/contact_me/',
          },
        ],
    sidebar: {
          '/doc_en/': genSidebarConfig_en('File Directory'),
          '/doc_zh/': genSidebarConfig_zh('文件目录')
        },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
  },
  markdown: {
		anchor: {
			permalink: true
		},
		toc: {
			includeLevel: [1, 2, 3, 4]
    },
    
		config: md => {
			// 使用更多 markdown-it 插件！
			//md.use(require('markdown-it-task-lists'))
			//.use(require('markdown-it-imsize'), { autofill: true })
    }
    
  }

}

function genSidebarConfig_en (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'Fluent_Getting_Started_Guide',
        'Fluent_Users_Guide',
        'Fluent_Text_Command_List',
        'Fluent_in_ANSYS_Workbench_Users_Guide',
        'Fluent_Dynamics_Verification',
        'Fluent_Theory_Guide',
        'Fluent_UDF_Manual',
      ]
    }
  ]
}

function genSidebarConfig_zh (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'Fluent_Getting_Started_Guide',
        'Fluent_Users_Guide',
        'Fluent_Text_Command_List',
        'Fluent_in_ANSYS_Workbench_Users_Guide',
        'Fluent_Dynamics_Verification',
        'Fluent_Theory_Guide',
        'Fluent_UDF_Manual',
      ]
    }
  ]
}

