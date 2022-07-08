export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c8c0681547471e09cb98d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yhwsiebv',
                  apiId: '8e12db94-6fec-4ecd-bdce-39c3bf611c60'
                },
                {
                  buildHookId: '62c8c068121d7b1d9278dd0a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4wjt3o28',
                  apiId: 'c81133e9-44eb-44f4-9b20-1736728074da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/npertuset/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4wjt3o28.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
