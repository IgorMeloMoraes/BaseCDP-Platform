import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const carouselType = defineType({
  name: 'carousel',
  title: 'Banners Rotativos',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno (Para organização)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Ativo?',
      description: 'Desmarque para esconder o banner sem precisar excluir.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'image',
      title: 'Imagem Desktop (Full HD)',
      description: 'Recomendado: 1920x1080px ou 1920x600px. Evite textos nas bordas.',
      type: 'image',
      options: {hotspot: true}, // Permite focar a parte importante da foto
      validation: (rule) => rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Descrição para Acessibilidade',
        },
      ],
    }),
    // Campo opcional para Link (caso clique no banner vá para algum lugar)
    defineField({
      name: 'link',
      title: 'Link de Destino (Opcional)',
      description: 'Se preenchido, o banner será clicável.',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      active: 'isActive',
    },
    prepare({title, media, active}) {
      return {
        title: title,
        subtitle: active ? '🟢 Ativo' : '🔴 Inativo',
        media: media,
      }
    },
  },
})
