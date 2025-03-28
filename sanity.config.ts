import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { table } from '@sanity/table'
import structure from './structure' 

export default defineConfig({
  name: 'default',
  title: 'pollux-homepage',

  projectId: '2b65j0c7',
  // dataset: 'production',
  dataset: 'pollux-live',

  plugins: [
    structureTool({
      structure, //커스텀 structure 연결
    }),
    // structureTool(),
    visionTool(),
    table(),
  ],

  schema: {
    types: schemaTypes,
  },
})
