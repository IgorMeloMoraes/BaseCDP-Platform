import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const eventType = defineType({
  name: 'event',
  title: 'Evento',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Evento',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Tipo de Evento',
      type: 'string',
      options: {
        list: [
          {title: 'Culto', value: 'service'},
          {title: 'Conferência', value: 'conference'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Outro', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'dateStart',
      title: 'Data e Hora de Início',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Localização',
      type: 'string',
      initialValue: 'Base CDP - Sede',
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de Capa (Banner)',
      type: 'image',
      options: {
        hotspot: true, // Permite cortar a imagem no painel
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Acessibilidade)',
        },
      ],
    }),
    defineField({
      name: 'details',
      title: 'Detalhes do Evento',
      type: 'array',
      of: [{type: 'block'}], // Isso cria um editor de texto rico (Rich Text)
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'dateStart',
      media: 'coverImage',
    },
    prepare({title, date, media}) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('pt-BR') : 'Sem data',
        media,
      }
    },
  },
})
