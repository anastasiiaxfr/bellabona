import {createStructure} from 'sanity/desk'

export const structure = createStructure((S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('homepageHero').title('Homepage Hero'),
      // Add other document types here as needed
    ])
)