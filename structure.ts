import { Iframe } from 'sanity-plugin-iframe-pane'

export default (S: any) =>
  S.list()
    .title('콘텐츠')
    .id('root-list')
    .items([
      S.listItem()
        .title('Post')
        .id('post')
        .child(
          S.documentTypeList('post')
            .title('Post 목록')
            .child((documentId: string) =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
                .views([
                  S.view.form(),
                  S.view
                    .component(Iframe)
                    .options({
                      url: (doc: any) => {
                        const slug = doc?.slug?.current
                        const locale = doc?.locale || 'ko'
                        return slug
                          ? `http://localhost:3000/api/preview?slug=${slug}&locale=${locale}`
                          : `http://localhost:3000`
                      },
                      reload: { button: true },
                      defaultSize: 'auto',
                    })
                    .title('Live Preview'),
                ])
            )
        ),
    ])
