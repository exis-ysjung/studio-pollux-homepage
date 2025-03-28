// sanity/schemas/index.ts
import { SchemaTypeDefinition } from 'sanity';
import postSchema from './postType';
import youtubeSchema from './youtube'; //YouTube 커스텀 타입 추가
// import videoSchema from './video' // video 커스텀 타입 추가

export const schemaTypes: SchemaTypeDefinition[] = [
  postSchema,
  youtubeSchema,
//   videoSchema,
];

export default schemaTypes;