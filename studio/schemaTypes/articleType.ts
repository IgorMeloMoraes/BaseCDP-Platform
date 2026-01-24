import {defineField, defineType} from 'sanity'
import {EditIcon} from '@sanity/icons'

export const articleType = defineType({
  name: 'article',
  title: 'Artigos e Notícias',
  type: 'document',
  icon: EditIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo (Para o Card)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de Destaque',
      type: 'image',
      options: {hotspot: true},
    }),
    // O conteúdo completo do artigo (Rich Text)
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
})
