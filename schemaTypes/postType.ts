// sanity/schemas/post.ts
import { SchemaTypeDefinition } from 'sanity';

export const postType: SchemaTypeDefinition = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(150),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: { isHighlighted: true }
        }
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [{ name: 'href', type: 'url', title: 'URL' }]
              },
              {
                name: 'color',
                type: 'object',
                title: 'Text Color',
                fields: [
                  {
                    name: 'hex',
                    type: 'string',
                    title: 'Hex Color (ex: #ff0000)',
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image Caption',
              options: { isHighlighted: true }
            }
          ]
        },
        {
          type: 'youtube' // 유튜브 블럭 (schemas/youtube.ts 필요)
        },
        {
          type: 'table' // 테이블 블럭 (@sanity/table 설치 필요)
        },
        {
          type: 'file',
          name: 'file',
          title: 'Video Upload',
          options: {
            accept: 'video/mp4,video/webm'
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Video Caption'
            }
          ]
        }
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Recent', value: 'recent' },
          { title: 'Industry', value: 'industry' },
          { title: 'Solution', value: 'solution' },
          { title: 'Tech', value: 'tech' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'locale',
      title: 'Locale',
      type: 'string',
      options: {
        list: [
          { title: 'Korean', value: 'ko' },
          { title: 'English', value: 'en' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      locale: 'locale',
      media: 'image',
    },
    prepare({ title, category, locale, media }) {
      return {
        title,
        subtitle: `${category} (${locale})`,
        media,
      };
    },
  },
};

export default postType;