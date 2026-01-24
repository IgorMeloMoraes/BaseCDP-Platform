import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const ministryType = defineType({
  name: 'ministry',
  title: 'Ministério',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Ministério',
      type: 'string',
      validation: (rule) => rule.required().error('O nome é obrigatório'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição Curta (Resumo)',
      description: 'Aparece no card do ministério na Home.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'leaders',
      title: 'Líderes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'Digite o nome e dê Enter',
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto de Capa',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'content',
      title: 'Sobre o Ministério',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
