import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'bydr.studio',

  projectId: 'sli1tldi',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), muxInput()],

  schema: {
    types: schemaTypes,
  },
})
