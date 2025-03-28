// sanity/schemas/youtube.ts

const youtube = {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'YouTube Video URL',
        validation: (Rule: any) => Rule.required().uri({ scheme: ['https', 'http'] }),
      }
    ]
  };
  
  export default youtube;
  