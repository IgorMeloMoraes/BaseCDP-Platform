import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export const sermonType = defineType({
  name: 'sermon',
  title: 'Pregação',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Mensagem',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Link do YouTube',
      type: 'url',
      description: 'Cole o link completo do vídeo (https://youtube.com/...)',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'preacher',
      title: 'Pregador',
      type: 'string', // Ex: Pr. Fulano
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data da Pregação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Capa do Vídeo (Opcional)',
      description: 'Se deixar vazio, o site tentará pegar a capa automática do YouTube.',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'preacher',
      media: 'thumbnail',
    },
  },
})
