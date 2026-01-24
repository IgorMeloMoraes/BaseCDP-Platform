import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export const sermonType = defineType({
  name: 'sermon',
  title: 'Vídeos (Pregações e Louvor)', // Mudamos o nome para ficar mais genérico
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Vídeo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // NOVO CAMPO: Categoria
    defineField({
      name: 'category',
      title: 'Categoria do Vídeo',
      type: 'string',
      options: {
        list: [
          {title: 'Mensagem / Pregação', value: 'message'},
          {title: 'Sala de Oração / Louvor', value: 'prayer'},
        ],
        layout: 'radio', // Botões de opção para ficar fácil clicar
      },
      initialValue: 'message',
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
      description: 'Cole o link completo (ex: https://www.youtube.com/watch?v=...)',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'preacher',
      title: 'Pregador / Ministro',
      type: 'string', // Ex: Pr. Fulano ou "Equipe de Louvor"
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
      name: 'thumbnail',
      title: 'Capa Personalizada (Opcional)',
      description: 'Se deixar vazio, o site pegará a miniatura automática do YouTube.',
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
