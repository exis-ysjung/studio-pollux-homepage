export default {
    name: 'video',
    title: 'Video Upload',
    type: 'object',
    fields: [
      {
        name: 'asset',
        title: 'Video File',
        type: 'file',
        options: {
            accept: 'video/mp4,video/webm' // ✅ mp4와 webm 파일 업로드 허용
        }
      },
      {
        name: 'caption',
        title: 'Video Caption',
        type: 'string'
      }
    ]
  }