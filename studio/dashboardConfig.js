export default {
  widgets: [
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
                  buildHookId: '5e25938d26162301cba717db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rdg93np1',
                  apiId: '45a12938-d22a-49ad-a9b2-abb987f4470f'
                },
                {
                  buildHookId: '5e25938dda434a01cfee2496',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j23omnrr',
                  apiId: 'b04041df-9481-4db6-9825-122182bb5d18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kakuk91/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j23omnrr.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
