export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5eb5ddd58a29b2019ea4912f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v126kayd',
                  apiId: 'e9b31174-5d22-4087-8f2d-0510d05b77f2'
                },
                {
                  buildHookId: '5eb5ddd58f7aa301e1db9748',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iedkxkek',
                  apiId: '69828925-e374-4924-8cee-a27271b748d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geoffreyporto/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iedkxkek.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
